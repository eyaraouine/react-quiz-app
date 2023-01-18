import './App.css';
import Header from "./components/header/Header"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer"
import Home from "./Pages/home/Home"
import Result from "./Pages/result/Result"
import Quiz from "./Pages/quiz/Quiz"
import {useState} from "react";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data)
    setQuestions(data.results);
  };
  return (
      <BrowserRouter>
    <div className="App" style={{backgroundImage:"url(./background.png)"}}>
    <Header/>

      <Routes>
        <Route path="/"  element={<Home setName={setName} name={name} fetchQuestions={fetchQuestions}/>} exact/>
        <Route path="/quiz"  element={<Quiz
        name={name}
        questions={questions}
        setQuestions={setQuestions}
        score={score}
        setScore={setScore}/>}/>
        <Route path="/result"  element={<Result
            name={name}
            score={score}
        />}/>
      </Routes>

      <Footer/>
    </div>
      </BrowserRouter>

  );
}

export default App;
