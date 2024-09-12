import React from 'react';

const Rating = ({ value, onChange }) => {
  const handleClick = (val) => {
    onChange(val);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={`circle ${value === num ? 'selected' : ''}`}
          onClick={() => handleClick(num)}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default Rating;
