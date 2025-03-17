import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useSpring, animated } from "react-spring";

function App() {
  const [quizArray, setQuizArray] = useState([]);
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizTopic, setQuizTopic] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");

  const categoriesAPI = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setQuizCategories(res.data.trivia_categories));
  };
  useEffect(categoriesAPI, []);

  const quizAPI = (topic, difficulty) => {
    axios
      .get(
        `https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}&${difficulty}&encode=base64`
      )
      .then((res) => setQuizArray(res.data.results));
  };
  useEffect(() => {
    quizAPI(quizTopic, quizDifficulty);
  }, [quizTopic, quizDifficulty]);

  const changeTopic = (event) => {
    setQuizTopic(event.value);
  };

  const changeDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  const fadein = useSpring({
    from: { y: -300, opacity: 0 },
    to: { y: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 4000,
    config: {
      duration: 2000,
    },
  });

  const fadeinfooter = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 4500,
    config: {
      duration: 2000,
    },
  });

  return (
    <div>
      <animated.div style={fadein}>
        <Navbar />
      </animated.div>
      <div className="big-flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/inputselect"
            element={
              <InputSelect
                quizArray={quizArray}
                quizCategories={quizCategories}
                changeTopic={changeTopic}
                changeDifficulty={changeDifficulty}
              />
            }
          />
          <Route path="/quiz" element={<Quiz quizArray={quizArray} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <animated.div style={fadeinfooter}>
          <Footer />
        </animated.div>
      </div>
    </div>
  );
}

export default App;
