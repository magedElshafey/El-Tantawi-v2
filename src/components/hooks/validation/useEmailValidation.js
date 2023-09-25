import { useState } from "react";

function useEmailValidation() {
  // State to hold the email input and its validity
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to handle changes in the email input
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  return {
    email,
    isValidEmail,
    setEmail,
    handleEmailChange,
  };
}

export default useEmailValidation;
