import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import {useEffect} from "react";
import Confetti from "react-confetti";
import "./Result.css"

const Result =({score,name})=>{

    const navigate=useNavigate()
    useEffect(()=>{
        if (!name){
            navigate("/")
        }
    },[name,navigate])
    return(<div className="result">
        <Confetti
            width="1600px"
            height="1000px"
        />
        <h1 className="congrats">Congratulations {name} ! You've Finished The Quiz </h1>
        <h2 className="score">Final score: {score}</h2>
        <Button
        variant="contained"
        color="primary"
        size="large"
        style={{alignSelf:"center",marginTop:60,marginBottom:30, width: 400}}
        href="/">
            Retry Again
        </Button>
    </div>)
}
export default Result;