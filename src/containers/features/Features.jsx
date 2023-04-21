import React from 'react';
import './features.css';

function Features({ title, text }) {
  return (
    <div
      className="gpt3__features-container__feature  section__padding"
      id="features"
    >
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
        {text}
      </div>
    </div>
  );
}

export default Features;
