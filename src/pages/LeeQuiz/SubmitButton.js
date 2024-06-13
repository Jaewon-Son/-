import React from 'react';

const SubmitButton = ({ data, answers, onSubmit, isWellQuiz }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = data.map((item, index) => {
      if (isWellQuiz) {
        return typeof item === 'string' && item.trim() === answers[index].answer.trim();
      } else {
        const jobCorrect = typeof item.job === 'string' && item.job.trim() === answers[index].job.trim();
        const nameCorrect = typeof item.name === 'string' && item.name.trim() === answers[index].name.trim();
        const featureCorrect = typeof item.feature === 'string' && item.feature.trim() === answers[index].feature.trim();
        return {
          job: jobCorrect && item.job !== '',
          name: nameCorrect && item.name !== '',
          feature: featureCorrect && item.feature !== ''
        };
      }
    });
    onSubmit(results);
  };

  return (
    <button onClick={handleSubmit} className="submit-button">제출</button>
  );
};

export default SubmitButton;
