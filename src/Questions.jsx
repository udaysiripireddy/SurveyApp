import React from 'react';
import './Questions.css';

const QuestionPage = ({ question, questionId, rating, onRatingChange }) => {
  return (
    <div className="question-page">
      <h2>{question}</h2>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`circle ${rating === value ? 'selected' : ''}`}
            onClick={() => onRatingChange(questionId, value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
