import "./Home.css"
import {Button, MenuItem, TextField} from '@mui/material';
import Categories from "../../Data/Categories";
import {useState} from "react";
import MessageError from "../../components/MessageError/MessageError";
import {useNavigate} from "react-router";

const Home =({name,setName,fetchQuestions})=>{
    const [category,setCategory]=useState("");
    const [difficulty,setDifficulty]=useState("")
    const [error,setError]=useState(false)
    const navigate=useNavigate();
    function handleSubmit(){
        if(!category || !name || !difficulty){
            setError(true)
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty)
          navigate("/quiz")
        }
    }
    return(<div className="content">
        <div className="settings">
            <div className="settings--select">
                {error && <MessageError>Please Fill The Empty Fields</MessageError>}
                <TextField style={{marginBottom:35,marginTop:20}} label="Enter Your Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
<TextField select label="Select Category" variant="outlined" style={{marginBottom:35}} value={category} onChange={(e)=>setCategory(e.target.value)}>
                {Categories.map((item)=>{
                    return <MenuItem key={item.category} value={item.value}>{item.category}</MenuItem>
                })}
</TextField>
                <TextField
                    select
                    label="Select Difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    variant="outlined"
                    style={{ marginBottom: 35 }}
                >
                    <MenuItem key="Easy" value="easy">
                        Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
                    </MenuItem>
                </TextField>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit} style={{marginTop:70}}>
                    Start Quiz
                </Button>
            </div>
        </div>
        <img src="./banner.svg" alt="quiz image" className="banner"/>
        </div>
)
}
export default Home;