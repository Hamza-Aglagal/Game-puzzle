import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

import img from "../../images/iconsignup.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate()

  const OnSignup = (e) => {
    // e.preventDefault()
    localStorage.setItem('User', ['test'])

    setTimeout(() => {
      navigate('/')
    }, 1000);
  }

  const [formData, setFormData] = useState({
    image: "",
    username: "",
    name: "",
    password: "",
    confirmation: "",
  });
  function getFileNameFromPath(path) {
    const parts = path.split("\\");
    return parts[parts.length - 1];
  }
  function handleChange(e) {

    const { name, value, files } = e.target;
    const fileName = files ? getFileNameFromPath(value) : value;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    console.log(`${name}: ${fileName}`);

    if (name === 'image' && files && files[0]) {
      const previewURL = URL.createObjectURL(files[0]); // create preview URL
      setFormData({ ...formData, image: files[0], preview: previewURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", formData.image);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
  };

  return (
    <div className="backgroundLogin">
      <form className="formul" onSubmit={handleSubmit}>
        <div className="combineicinwithinput">
          <input
            type="file"
            className="profile"
            name="image"
            onChange={handleChange}
          />

          {formData.preview ? (
            <img
              src={formData.preview}
              className="imageformule"
              alt="Preview"
            />
          ) : (
            <img src={img} className="imageformule" alt="Default" />
          )}


          <span className="textblue-upload">Upload a picture</span>
        </div>

        <div className="floatingicon">
          <span className="iconFormulaire">
            {" "}
            <AiOutlineUser className="icon" />
          </span>
          <input
            type="text"
            placeholder="User Name"
            className="inputsignup"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="floatingicon">
          <span className="iconFormulaire">
            <CgMail className="icon" />
          </span>
          <input
            type="Email"
            placeholder="Email"
            name="name"
            className="inputsignup"
            onChange={handleChange}
          />
        </div>

        <div className="floatingicon">
          <span className="iconFormulaire">
            <RiLockPasswordLine className="icon" />
          </span>
          <input
            type="Password"
            placeholder="Password"
            name="password"
            className="inputsignup"
            onChange={handleChange}
          />
        </div>

        <div className="floatingicon">
          <span className="iconFormulaire">
            <GiConfirmed className="icon" />
          </span>
          <input
            type="Password"
            placeholder="Confirm password"
            name="confirmation"
            className="inputsignup"
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Login" onClick={OnSignup} className="inputSubmit" />
        <span className="textsignup">
          Already been he? <Link to='' className="signuplink">Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
