import {useEffect, useState} from "react";
import "./Quiz.css"
import {CircularProgress} from "@mui/material";
import Question from "../../components/question/Question";

const Quiz =({name,questions,setQuestions,score,setScore})=>{
    const [options,setOptions]=useState();
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const handleShuffle=(options)=>{
        return options.sort(()=>Math.random()-0.5)
    }

    useEffect(()=>{
        console.log(questions)
        setOptions(questions && handleShuffle([questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers]))
    },[questions,currentQuestion])
    return(<div className="quiz">
        <span className="subtitle">Welcome, {name} !</span>
        {questions ? (
            <div className="quizInfo">
                <span>Category : {questions && questions[currentQuestion].category}</span>
                <span>Score : {score}</span>
            </div>
        ):<CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
        />}
        <Question
        currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}/>

    </div>)
}
export default Quiz;