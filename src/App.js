import './App.css';
import './index.css';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatGPT,
} from './containers';
import { Cta, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
