import React from 'react';
import './TextQuestionPage.css'; // Ensure you have styles if needed

const TextQuestionPage = ({ question, questionId, text, onTextChange, onSubmit }) => {
  return (
    <div className="question-page">
      <h2>{question}</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => onTextChange(questionId, e.target.value)}
        placeholder="Enter your comments here..."
      />
     
    </div>
  );
};

export default TextQuestionPage;
