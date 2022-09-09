import React, { useState } from 'react';
import './LikeButton.css';

const colours = ['purple','blue','green','yellow','orange','red'];

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [selectedColourIndex, setColourIndex] = useState(0);

  const handleLikesIncrease = () => {
    setLikes(likes + 1);
  };

  const nextColour = () => {
    const newColourIndex = selectedColourIndex + 1;
    if (colours[newColourIndex]) {
        setColourIndex(newColourIndex);
    } else {
        setColourIndex(0);
    }
  }

  return (
    <div>
      <button 
        className="likes-btn" 
        style={{backgroundColor: colours[selectedColourIndex]}} 
        onClick={() => {
            handleLikesIncrease();
            nextColour();
        }}>
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
