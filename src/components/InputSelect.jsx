/* eslint-disable react/prop-types */
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function InputSelect({ quizCategories, changeTopic, changeDifficulty }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const topic = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    config: { duration: 500 },
    delay: 1200,
  });

  const topicselect = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: isLoaded ? 1 : 0 },
    config: { duration: 300 },
    delay: 300,
  });

  const button = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    config: { duration: 1000 },
    delay: 1200,
  });

  return (
    <div className="Input">
      <div className="Topic">
        <animated.div style={topic}>
          <h2>Search for a topic:</h2>
        </animated.div>
        <animated.div style={topicselect}>
          <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
        </animated.div>
      </div>

      <div className="diffbtn">
        <Difficulty changeDifficulty={changeDifficulty} />
      </div>
      <animated.div style={button}>
        <div className="start-quiz">
          <Link to="/quiz">
            <button className="input-start">
              <h1>START</h1>
            </button>
          </Link>
        </div>
      </animated.div>
    </div>
  );
}

export default InputSelect;
