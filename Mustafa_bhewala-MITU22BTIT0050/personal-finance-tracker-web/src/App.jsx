import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import History from './pages/History';
import Categories from './pages/Categories';
import Reports from './pages/Reports';
import Login from './pages/Login'; // ← Create this

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <Navbar user={user} setUser={setUser} />}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
          <Route path="/add" element={user ? <AddTransaction user={user} /> : <Navigate to="/" />} />
          <Route path="/history" element={user ? <History user={user} /> : <Navigate to="/" />} />
          <Route path="/categories" element={user ? <Categories user={user} /> : <Navigate to="/" />} />
          <Route path="/reports" element={user ? <Reports user={user} /> : <Navigate to="/" />} />
          <Route path="*" element={<h2 className="text-red-500">404 - Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
