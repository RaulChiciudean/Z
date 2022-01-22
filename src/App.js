import React from 'react';
import Home from './components/Home';
import Program from './components/Program';
import Recipe from './components/Recipe';
import GlobalStyle from './GlobalStyles';
import Title from './components/Title';
import Map from './components/Map';
import About from './components/About';
import LoremText from './components/Text';
import FooterPage from './components/Footer';
import Title2 from './components/Title2';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Program />
      <Title />
      <Recipe />
      <Title2 />
      <Map />
      <LoremText />
      <About />
      <FooterPage />
    </div>
  );
}

export default App;
