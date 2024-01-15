import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="text-2xl font-bold mb-4">CraftHub Privacy Policy</h1>
      <p>
        Welcome to CraftHub, a creative community dedicated to DIY projects
        inspired by Asian culture. CraftHub values your privacy and is committed
        to protecting your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and protect your information.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Information We Collect</h2>
      <p>
        <h3 className="sm:pb-2 text-xl">Account Information: </h3>
        <li className="pb-2">
          When you create a CraftHub account, we collect your username, email
          address, and password.
        </li>
        <h3 className="sm:pb-2 text-xl">Profile Information:</h3>
        <li className="pb-2">
          You may choose to provide additional information such as your profile
          picture, location, and a bio to personalize your CraftHub experience.
        </li>
        <h3 className="sm:pb-2 text-xl">DIY Projects:</h3>
        <li className="pb-2">
          We collect information related to DIY projects you share on CraftHub,
          including project details, images, and any accompanying descriptions.
        </li>
        <h3 className="sm:pb-2 text-xl">Usage Information:</h3>
        <li className="pb-2">
          We gather information about your interactions with CraftHub, including
          the pages you visit, the projects you engage with, and other
          activities on the platform.
        </li>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p>
        <h3 className="sm:pb-2 text-xl">
          We use the collected information to:
        </h3>
        <li className="pb-2">Provide and enhance CraftHub services.</li>

        <li className="pb-2">
          Personalize your experience and offer relevant DIY project
          recommendations.
        </li>

        <li className="pb-2">
          Facilitate social interactions within the CraftHub community.
        </li>

        <li className="pb-2">Improve our platform and develop new features.</li>
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Sharing of Information</h2>
      <p>
        <h3 className="sm:pb-2 text-xl">We may share your information with:</h3>
        <li className="pb-2">
          Other CraftHub users based on your privacy settings.
        </li>

        <li className="pb-2">
          Third-party service providers assisting in platform operations.
        </li>

        <li className="pb-2">
          Law enforcement or legal authorities when required by applicable laws.
        </li>
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">
        Cookies and Tracking Technologies
      </h2>
      <p>
        CraftHub uses cookies and similar technologies to enhance your browsing
        experience and collect usage data. You can manage cookie preferences
        through your browser settings.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Your Choices</h2>
      <p>
        <h3 className="sm:pb-2 text-xl">You can:</h3>
        <ul className="list-disc pl-6">
          <li className="pb-2">Edit your profile and privacy settings.</li>
          <li className="pb-2">Opt-out of certain communications.</li>
          <li className="pb-2">Access and delete your data.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Security</h2>
      <p>
        CraftHub employs security measures to protect your information; however,
        no method of transmission over the internet is entirely secure.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Children's Privacy</h2>
      <p>
        CraftHub is not directed at individuals under the age of 13. If you
        become aware that a child has provided us with personal information,
        please contact us to remove the data.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Changes to this Privacy Policy
      </h2>
      <p>
        CraftHub may update this Privacy Policy. We will notify users of any
        material changes via email or through the platform.
      </p>

      <p className="mt-4">
        Thank you for being a part of the CraftHub community!
      </p>
    </div>
  );
};

export default PrivacyPolicy;
