import {useState} from "react";
import MessageError from "../MessageError/MessageError";
import "./Question.css"
import {useNavigate} from "react-router";
import {Button} from "@mui/material";

const Question=({questions,setQuestions,score,setScore,currentQuestion,setCurrentQuestion,options})=>{
const [error,setError]=useState(false);
const [selected,setSelected]=useState();
const navigate=useNavigate()
    const handleNext=()=>{
        if (currentQuestion==9){
            navigate("/result")}
        else if (!selected){
setError("Please Select An option First")
        }
        else {
            setCurrentQuestion(currentQuestion+1)
            setSelected();
        }
    }
    const handleQuit = () => {
        setCurrentQuestion(0);
        setQuestions();
    };
    const handleSelect = (i) => {
        if ( questions && selected === i && selected ===questions[currentQuestion]?.correct_answer ) return "correct";
        else if (questions && selected === i && selected !== questions[currentQuestion]?.correct_answer) return "wrong";
        else if (questions && i===questions[currentQuestion]?.correct_answer) return "correct";
    };
const handleCheck=(i)=>{
    setSelected(i)
    if(questions && i===questions[currentQuestion]?.correct_answer)
        setScore(score+1)
    setError(false)
}
return(<div className="question--container">
    <h1> Question {currentQuestion +1}</h1>
    <div className="question">
        <h2 style={{color:"black"}}>{questions && questions[currentQuestion].question}</h2>
        <div className="options">
            {error && <MessageError>{error}</MessageError>}
            {options &&
            options.map((opt)=>(
            <button key={opt} className={`option ${selected && handleSelect(opt)}`} onClick={()=>handleCheck(opt)}   disabled={selected}>
            {opt}
            </button>)
            )}
    </div>
        <div className="controls">
            <Button onClick={handleQuit}
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ width: 185 }}
                    href="/"
                    >
                Quit
            </Button>
            <Button onClick={handleNext}
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: 185 }}
                    >
                {currentQuestion<=8 ? "Next Question" :"Submit"}
            </Button>
    </div>
    </div>
</div>)
    }
export default Question