import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registerform.css";
import RegistrationBackground from "../assets/reg-bg-img.png";

export default function Registerform() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();
  const handleSignUp = () => {
    let isErrors = false;
    if (formValues.name.trim().length === 0) {
      // trim function removes whitespaces from start and end of string
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and conditions",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }
    if (!isErrors) {
      localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/movies");
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="parent-container">
        <div className="bg-img">
          <img id="image1" src={RegistrationBackground} alt="RegistrationBackground" />
          <p id="subtitle">Discover new things on Superapp</p>
        </div>
        <div className="form">
          <h1 id="heading">Super app</h1>
          <p id="account">Create your new account</p>
          <input className="field" type="text" placeholder="Name" value={formValues.name} onChange={handleChange} name="name"/>
          {errors.name ? (<p className="errorMssge">{errors.name}</p>) : (<></>)}

          <input className="field" type="text" placeholder="Username" value={formValues.username} onChange={handleChange} name="username"/>
          {errors.username ? (<p className="errorMssge">{errors.username}</p>) : (<></>)}
      
          <input className="field" type="email" placeholder="Email" value={formValues.email} onChange={handleChange} name="email"/>
          {errors.email ? (<p className="errorMssge">{errors.email}</p>) : (<></>)}
      
          <input className="field" type="text" placeholder="Mobile" value={formValues.mobile} onChange={handleChange} name="mobile"/>
          {errors.mobile ? (<p className="errorMssge">{errors.mobile}</p>) : (<></>)}

          <div style={{ display: "flex", width:"40%",gap:"10px"}}>
            <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange}/>
            <label htmlFor="checkbox" style={{color: "#7C7C7C",fontFamily:"DM sans",fontWeight:"400",fontSize:"12px"}}>
              Share my registration data with Superapp
            </label>
          </div>
          {errors.checkbox ? (<p className="errorMssge">{errors.checkbox}</p>) : (<></>)}
          <button className="signup" onClick={handleSignUp}>SIGN UP</button>
          <p className="highlight">By clicking on Sign up. you agree to Superapp <span style={{color:"#72DB73"}}>Terms and Conditions of Use</span></p>
          <p  className="highlight">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:"#72DB73"}}>Privacy Policy</span></p>
        </div>
    </div>
  );
}
