import { useSpring, animated } from "react-spring";

const Difficulty = ({ changeDifficulty }) => {
  const one = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 800,

    config: {
      duration: 300, 
    },
  });

  const two = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 700,

    config: {
      duration: 300, 
    },
  });

  const three = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 600,

    config: {
      duration: 300, 
    },
  });

  const four = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,

    config: {
      duration: 300, 
    },
  });

  const difficulty = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1200,

    config: {
      duration: 500, 
    },
  });

  return (
    <div className="Difficulty">
      <animated.div style={difficulty}>
        <h2>Choose a difficulty level:</h2>
      </animated.div>
      <div className="diffbtn">
        <animated.div style={one}>
          <button
            className="emdbtn"
            value="difficulty=easy"
            onClick={changeDifficulty}
          >
            Easy
          </button>
        </animated.div>
        <animated.div style={two}>
          <button
            className="emdbtn"
            value="difficulty=medium"
            onClick={changeDifficulty}
          >
            Medium
          </button>
        </animated.div>
        <animated.div style={three}>
          <button
            className="emdbtn"
            value="difficulty=hard"
            onClick={changeDifficulty}
          >
            Difficult
          </button>
        </animated.div>
        <animated.div style={four}>
          <button className="emdbtn" value="" onClick={changeDifficulty}>
            Randomized
          </button>
        </animated.div>
      </div>
    </div>
  );
};

export default Difficulty;
