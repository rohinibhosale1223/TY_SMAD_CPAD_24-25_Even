// src/App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import LoginPage from './componant/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/Little-Lemon/" element={<HomePage />} />
      <Route path="/Little-Lemon/booking" element={<BookingPage />} />
      <Route path="/Little-Lemon/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
