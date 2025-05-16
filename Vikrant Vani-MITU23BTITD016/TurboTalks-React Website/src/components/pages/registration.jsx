import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/registration.css";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    state: "",
    newsletter: false,
    terms: false,
  });

  const [isValid, setIsValid] = useState({
    fullname: false,
    email: false,
    password: false,
    cpassword: false,
    phone: false,
    state: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "fullname") {
      setIsValid((prev) => ({
        ...prev,
        fullname: value.length > 2,
      }));
    } else if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid((prev) => ({
        ...prev,
        email: emailPattern.test(value),
      }));
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      setIsValid((prev) => ({
        ...prev,
        password: passwordRegex.test(value),
      }));
    } else if (name === "cpassword") {
      setIsValid((prev) => ({
        ...prev,
        cpassword: value === formData.password,
      }));
    } else if (name === "phone") {
      const phonePattern = /^\d{10}$/;
      setIsValid((prev) => ({
        ...prev,
        phone: phonePattern.test(value),
      }));
    } else if (name === "state") {
      setIsValid((prev) => ({
        ...prev,
        state: value !== "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    return Object.values(isValid).every((value) => value) && formData.terms;
  };

  return (
    <div className="registrationContainer">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="heading">REGISTER AS AN TURBOTALKS ENTHUSIAST</h3>
        <h4 className="heading">Account Details</h4>

        <input
          type="text"
          className="name"
          placeholder="Full Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />

        <input
          type="email"
          className="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <div className="password-cpassword-row">
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="cpassword"
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleInputChange}
          />
        </div>

        <div className="number-menu-row">
          <input
            type="text"
            className="number"
            placeholder="Contact Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <select
            className="menu"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">Select Your State --</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chattisgarh">Chattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkand">Jharkand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />
            I would like to subscribe to the TurboTalks newsletter.
          </label>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
            />
            I have read all Terms & Conditions.
          </label>
        </div>

        <button
          type="submit"
          className="registerButton"
          disabled={!isFormValid()}
        >
          REGISTER
        </button>

        <div>
          <label className="heading">Already a member of TurboTalks?</label>
          <Link to="/login" className="loginLink">
            Login Here!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
