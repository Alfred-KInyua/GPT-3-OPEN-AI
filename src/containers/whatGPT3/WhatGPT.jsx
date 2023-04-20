import React from 'react';
import './whatGPT3.css';
import Features from '../features/Features';

function WhatGPT() {
  return (
    <div className="gpt3__whatgpt3 section_margin ">
      <div className="gpt3__whatgpt3-feature ">
        <Features />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The posibbilities are beyond your immagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  );
}

export default WhatGPT;
