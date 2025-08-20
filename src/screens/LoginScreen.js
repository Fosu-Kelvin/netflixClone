import { useState } from "react";
import "./LoginScreen.css";
import img from "../nav/images/netF.png";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)


  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img className="loginscreen_logo" src={img} alt="" />
        <button 
        className="loginscreen_button"
        onClick={() => setSignIn(true)}
        >
            Sign In</button>
        <div className="loginscreen_gradient"/>
        <div className="loginscreen_body">
            {
                signIn  ? (
                    <SignUpScreen/>
                ): (<>
                <h1>Unlimited films, TV programs and more</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch ? Enter your email to create or restart your membership</h3>
                <div className="loginscreen_input">
                    <form>
                        <input type="email" 
                        placeholder="email address"
                        />
                        <button
                        onClick={() =>setSignIn(true)}
                        className="loginscreen_getStarted"
                        >GET STARTED</button>
                    </form>
                </div>
                </>
                )
            }
            
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
