import React from "react";
import SignIn from "../../Components/sign-in";
import SignUp from "../../Components/sign-up";
import "./signin-signup.styles.scss";

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
