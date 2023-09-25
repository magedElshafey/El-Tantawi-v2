import { useState } from "react";

const useNameValidation = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (value) => {
    // Use a regular expression to check if the input contains any numbers
    const hasNumbers = /\d/.test(value);

    // Update the isValid state based on the presence of numbers
    setIsValid(!hasNumbers);

    // Update the name state with the input value
    setName(value);
  };

  return {
    name,
    isValid,
    handleNameChange,
  };
};

export default useNameValidation;
