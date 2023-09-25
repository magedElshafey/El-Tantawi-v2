import { useState } from "react";

const usePhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVlidPhone, setIsValidPhone] = useState(true);

  const validatePhoneNumber = (input) => {
    // Define a regular expression pattern for a valid phone number.
    // This example assumes a simple format: 10 digits.
    const phonePattern = /^\d{10}$/;

    // Check if the input matches the phone number pattern.
    const isValidPhoneNumber = phonePattern.test(input);

    // Update the isValid state.
    setIsValidPhone(isValidPhoneNumber);

    // Set the phone number state.
    setPhoneNumber(input);
  };

  return { phoneNumber, isVlidPhone, validatePhoneNumber };
};

export default usePhoneNumberValidation;
