import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import './styles/header.css';
import './styles/about.css';
import './styles/experience.css';
import './styles/project.css';

import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path = "/*" element = {<App />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

