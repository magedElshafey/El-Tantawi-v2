import React from "react";
import ContactForm from "../components/contact/form/ContactForm";
import ContactImg from "../components/contact/contactImg/ContactImg";

const Contact = () => {
  return (
    <div className="container py-5 py-md-3 mt-5 mt-md-0">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0 ">
          <ContactForm />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 ">
          <ContactImg />
        </div>
      </div>
    </div>
  );
};

export default Contact;
