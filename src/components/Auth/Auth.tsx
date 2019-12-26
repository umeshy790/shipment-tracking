import React from "react";
import "./Auth.css";
import "../../styles/Styles.css";
import Button from "@material-ui/core/Button";

const Auth: React.FC = () => {
  return (
    <div className="container">
      <div className="logo">
        <span className="logo-txt">P</span>
        <span className="logo-txt">B</span>
      </div>
      <div className="body theme">
        <input type="email" name="user-name" className="input-box" placeholder="Email" autoComplete="false" />
        <input type="password" name="user-password" className="input-box" placeholder="Password" autoComplete="false" />
        <Button variant="contained" type="submit" className="sign-btn">
          Sign In
        </Button>
        <div className="option">
          <span>-----</span>
        </div>
        <Button variant="contained" className="sign-btn">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Auth;
