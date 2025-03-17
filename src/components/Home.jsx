import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";
import { Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const title = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    config: { duration: 1000 },
    delay: 1000,
  });

  const text = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    config: { duration: 1000 },
    delay: 2000,
  });

  const wheel = useSpring({
    from: { y: -800, opacity: 0 },
    to: { y: isLoaded ? 0 : -800, opacity: isLoaded ? 1 : 0 },
    config: { duration: 900 },
    delay: 100,
  });

  return (
    <div className="Home">
      <animated.div style={title}>
        <h1 className="maintitle-desktop">Welcome to the Game!</h1>
        <h1 className="maintitle-mobile">Welcome to Trivia Night</h1>
      </animated.div>
      <animated.div style={text}>
        <div className="intro-text">
          <p id="intro">
            Try to answer each question while the clock is running. If you get
            stuck, use the joker card. <br />
            <br />
            To enter the game, click on the spinning wheel.
            <br />
          </p>
        </div>
      </animated.div>
      <animated.div style={text}>
        <div className="intro-text-mobile">
          <ReadMore>
            <Typography className="intro-mobile">
              Try to answer each question while the clock is running. If you get
              stuck, use the joker card. <br />
              To enter the game, click the spinning wheel.
            </Typography>
          </ReadMore>
        </div>
      </animated.div>
      <animated.div style={wheel}>
        <div className="start-container">
          <Link to="/inputselect">
            <StartBtn />
          </Link>
        </div>
      </animated.div>
    </div>
  );
}

export default Home;
