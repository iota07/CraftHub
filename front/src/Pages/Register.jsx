import React from "react";
import SignInForm from "../Components/SignInForm/SignInForm";
import LoginForm from "../Components/LoginForm/LoginForm";
import GDPRCookieConsent from "../Components/GDPR/GDPRCookieConsent";

const Register = () => {
  return (
    <main className="w-full h-screen bg-yellow">
      <GDPRCookieConsent />
      <SignInForm />
    </main>
  );
};

export default Register;
