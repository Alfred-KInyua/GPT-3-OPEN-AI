import React from 'react';
import './whatGPT3.css';
import Features from '../features/Features';

function WhatGPT() {
  return (
    <div className="gpt3__whatgpt3 section_margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Features />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The posibbilities are beyond your immagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Features
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Features
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}

export default WhatGPT;
