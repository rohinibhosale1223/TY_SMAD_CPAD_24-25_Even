import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "username") {
      setIsValid((prev) => ({
        ...prev,
        username: value.length > 5,
      }));
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      setIsValid((prev) => ({
        ...prev,
        password: passwordRegex.test(value),
      }));
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate("/home");
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h3 className="heading">JOIN THE TURBOTALKS INDIA COMMUNITY</h3>
          <h3 className="heading">
            <a
              href="https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=ASKXGp3t4IG5KeJP87H40h4aBdRScxhnTvw1Bty8N8ijI0NwG9G1Yy5CRNb7sXkJhXEybkdo8twjlw&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S252556771%3A1706118587831152&theme=glif"
              className="signInLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In With Google
            </a>
          </h3>
          <h3 className="heading">OR</h3>
          <h4 className="heading">Member Login</h4>
        </div>

        <div>
          <input
            type="text"
            className={`input ${isValid.username ? "valid" : "invalid"}`}
            placeholder="Username/Email"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <div className="passwordContainer">
            <input
              type={showPassword ? "text" : "password"}
              className={`input ${isValid.password ? "valid" : "invalid"}`}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className="showPassButton"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>

          <button
            type="submit"
            className="loginButton"
            disabled={!(isValid.username && isValid.password)}
          >
            LOGIN
          </button>

          <Link to="/register" className="registerLink">
            New To TurboTalks? Register Here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
