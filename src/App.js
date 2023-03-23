import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import DonatePage from './Donate';
import RequestPage from './Request';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/request" element={<RequestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
