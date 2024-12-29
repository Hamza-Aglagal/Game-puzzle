import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
// import { AiOutlineUser } from "react-icons/ai";
// import { GiConfirmed } from "react-icons/gi";
import './login.css'
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate()

  const OnLogin =(e)=>{
    // e.preventDefault()
    localStorage.setItem('Admin',['test'])
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
       <div className="bgtitreLogin">
      <h1 className="titreLogin">Login</h1>
    </div>
      <form className="formule" onSubmit={handleSubmit}>
      
        <div className="floatingicon">
          <span className="iconFormulaire">
            <CgMail className="icon" />
          </span>
          <input
            type="Email"
            placeholder="Email"
            name="name"
            className="inputLogin"
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
            className="inputLogin"
            onChange={handleChange}
          />
        </div>
        <span className="ForgetPasswoard">
         forget password
        </span>


        <input type="submit" value="Login" onClick={OnLogin} className="inputSubmit" />


        <span className="textsignup">
        First time here?<Link to='register' className="signuplink">Sign Up
          </Link> </span>
      </form>
    </div>
  );
};

export default Login;
