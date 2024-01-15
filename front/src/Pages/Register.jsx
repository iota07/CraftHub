import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import GDPRCookieConsent from "../Components/GDPR/GDPRCookieConsent";

const Register = () => {
  return (
    <main>
      <GDPRCookieConsent />
      <LoginForm />
    </main>
  );
};

export default Register;
