import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import './components/Portfolio';
import React, { useState } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState(<AboutMe/>);
  return (
    <div className="App">
      <NavBar setCurrentPage = {setCurrentPage}/>
      {currentPage}
      

    </div>
  );
}

export default App;
