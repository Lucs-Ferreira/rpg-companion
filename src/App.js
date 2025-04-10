// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import PrivateRoute from './components/security/PrivateRoute';

// Você deverá criar ou migrar o componente Login posteriormente:
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ResetPassword from './components/ResetPassword';
import DashboardPage from './components/DashboardPage';
import CharactersPage from './components/CharactersPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LoadingScreen />} />
        <Route path="/login" element={
          <LoginPage />} />
        <Route path="/cadastro" element={
          <RegisterPage />} />
        <Route path="/resetar-senha" element={
          <ResetPassword />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>} />
        <Route path="/personagens" element={
          <PrivateRoute>
            <CharactersPage />
          </PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
