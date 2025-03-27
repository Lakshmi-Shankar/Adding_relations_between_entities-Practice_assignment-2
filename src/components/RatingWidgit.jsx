import React, { useState } from "react";

const RatingWidget = ({ onRatingChange }) => {
    const [starCount, setStarCount] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = (star) => {
        setStarCount(star);
    };

    const handleSubmit = () => {
        onRatingChange(starCount);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "24px", cursor: "pointer" }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onMouseOver={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => handleStarClick(star)}
                    style={{ color: (hoveredRating || starCount) >= star ? "gold" : "gray" }}
                >
                    ★
                </span>
            ))}
            <button type="submit" className="submitButton" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default RatingWidget;
