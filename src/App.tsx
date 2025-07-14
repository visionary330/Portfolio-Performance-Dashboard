import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Performance from './pages/Performance';
import Holdings from './pages/Holdings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="performance" element={<Performance />} />
          <Route path="holdings" element={<Holdings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
