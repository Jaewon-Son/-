import React from 'react';
import './PersonCard.css';

const PersonCard = ({ person }) => {
  const { image, job, name, feature } = person;
  return (
    <div className="person-card">
      <img src={image} alt={name} className="person-image" />
      <div className="person-info">
        <div className="person-job">{job}</div>
        <div className="person-name">{name}</div>
        <div className="person-feature">{feature}</div>
      </div>
    </div>
  );
};

export default PersonCard;