import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            className="star"
                            color={
                                ratingValue <= (hover || rating)
                                    ? "#E1AF4F"
                                    : "#e4e5e9"
                            }
                            size={40}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            {/*<p>Your rating is {rating}.</p>*/}
        </div>
    );
};

export default StarRating;
