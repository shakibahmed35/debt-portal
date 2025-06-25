import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubmitAccount from './pages/SubmitAccount';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Contracts from './pages/Contracts';
import RoleRoute from './components/RoleRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/submit-account"
            element={
              <PrivateRoute>
                <SubmitAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/contracts"
            element={
              <RoleRoute allowedRoles={['admin']}>
                <Contracts />
              </RoleRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider> 
  );
}

export default App;
