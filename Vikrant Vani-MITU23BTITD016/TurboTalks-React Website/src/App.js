import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/login";
import RegistrationPage from "./components/pages/registration";
import HomePage from "./components/pages/home";
import CarNewsPage from "./components/pages/carnews";
import CarReviewsPage from "./components/pages/carreviews";
import ServicesPage from "./components/pages/services";
import CartPage from "./components/pages/cartpage";
function App() {
  return (
    <Router>
      <HomePage/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/carnews" element={<CarNewsPage />} />
        <Route path="/carreviews" element={<CarReviewsPage />} />
        <Route path="/servicepage" element={<ServicesPage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
