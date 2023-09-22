import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';

function App() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;