import React, { useState } from 'react';
import axios from 'axios';
import QuestionPage from './Questions';
import TextQuestionPage from './TextQuestionPage'; 

const questionsData = [
  { id: 1, question: 'How satisfied are you with our products?' },
  { id: 2, question: 'How fair are the prices compared to similar retailers?' },
  { id: 3, question: 'How satisfied are you with the value for money of your purchase?' },
  { id: 4, question: 'On a scale of 1-5 how would you recommend us to your friends and family?' },
  { id: 5, question: 'What could we do to improve our service?' }
];

const Questionnaire = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentPage < questionsData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRatingChange = (questionId, rating) => {
    setAnswers({ ...answers, [questionId]: rating });
  };

  const handleTextChange = (questionId, text) => {
    setAnswers({ ...answers, [questionId]: text });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('', answers);// backend API should add here 
      alert('Survey submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting the survey. Please try again.');
    }
  };

  const currentQuestion = questionsData[currentPage];

  return (
    <div>
      <div className="progress-indicator">
        Question {currentPage + 1} / {questionsData.length}
      </div>
      {currentQuestion.id === 5 ? (
        <TextQuestionPage
          question={currentQuestion.question}
          questionId={currentQuestion.id}
          text={answers[currentQuestion.id] || ''}
          onTextChange={handleTextChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <QuestionPage
          question={currentQuestion.question}
          questionId={currentQuestion.id}
          rating={answers[currentQuestion.id]}
          onRatingChange={handleRatingChange}
        />
      )}
      <div className="button-container">
        <button onClick={handlePrev} disabled={currentPage === 0}>Previous</button>
        {currentPage < questionsData.length - 1 ? (
          <button onClick={handleNext} disabled={currentPage === questionsData.length - 1}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
