import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { useSpring, animated } from "react-spring";

const Contact = () => {
  // State to manage visibility of the component on mount
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Spring animation for "How did you like the game?" section
  const howLike = useSpring({
    opacity: isVisible ? 1 : 0, // Start from opacity 0, transition to 1
    config: { duration: 500 }, // Duration for the animation
  });

  // Spring animation for stars section (StarRating)
  const stars = useSpring({
    opacity: isVisible ? 1 : 0, // Start from opacity 0, transition to 1
    config: { duration: 500 },
    delay: 500, // Delay for this section
  });

  // Spring animation for Contact Us section
  const contactUs = useSpring({
    opacity: isVisible ? 1 : 0, // Start from opacity 0, transition to 1
    config: { duration: 1000 },
    delay: 1000, // Delay for the Contact Us section
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="star-feedback">
          {/* "How did you like the game?" with animation */}
          <animated.div style={howLike}>
            <h1 className="rating-title">How did you like the game?</h1>
          </animated.div>

          {/* StarRating component with animation */}
          <animated.div style={stars}>
            <StarRating />
          </animated.div>
        </div>

        {/* Contact Us section with animation */}
        <animated.div style={contactUs}>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <table className="table">
              <tbody>
                <tr className="name">
                  <td className="right-column">
                    <input
                      className="contact-input"
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </td>
                </tr>
                <tr className="email">
                  <td className="right-column">
                    <input
                      className="contact-input"
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </td>
                </tr>
                <tr className="message">
                  <td className="right-column">
                    <textarea id="message" required placeholder="Message" />
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </animated.div>
      </form>
    </div>
  );
};

export default Contact;
