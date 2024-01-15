import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import Modal from "react-modal";
import PrivacyPolicy from "./PrivacyPolicy";

const GDPRCookieConsent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="GDPR"
        className="bg-[#333] text-[4e503b]"
        expires={150}
      >
        This website uses cookies to ensure you get the best experience on our
        website. By continuing to use this site, you consent to the use of
        cookies in accordance with our{" "}
        <span
          onClick={openModal}
          className="text-blue cursor-pointer underline underline-offset-2"
        >
          Privacy Policy
        </span>
        .
      </CookieConsent>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Privacy Policy"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "60vw",
            maxHeight: "60vh",
            margin: "auto",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            overflow: "auto",
          },
        }}
      >
        <div>
          <button
            className="bg-yellow text-blue p-2 mb-4 w-24 rounded-lg top-0 left-0 z-10"
            onClick={closeModal}
          >
            Close
          </button>

          <PrivacyPolicy />
        </div>
      </Modal>
    </>
  );
};

export default GDPRCookieConsent;
