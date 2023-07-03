import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Register from './views/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
