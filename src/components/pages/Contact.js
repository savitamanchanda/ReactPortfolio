import React, { useState } from "react";
import Footer from "../Footer";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === "name") {
          setName(inputValue);
        } else if (inputType === "email") {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!name || !email || !message) {
          setFormSubmitted("");
          setErrorMessage("All of the fields are necessary.");
          return;
        }

        if (!validateEmail(email)) {
          setFormSubmitted("");
          setErrorMessage("Invalid Email. Please try again.");
          return;
        }

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        setFormSubmitted(`Thank you ${name} for reaching out.`);
      };

      return ( 
        <div>
            <div>
                <h1>Contact Me!</h1>
            <form>
  <div className="form-group">
    <label for="name">Name</label>
    <input  value={name} name="name" onChange={handleInputChange} type="text" className="form-control" />
  </div>
  <div className="form-group">
    <label for="email">Email</label>
    <input  value={email} name="email" onChange={handleInputChange} type="email" placeholder="name@email.com" className="form-control" />
  </div>
  <div className="form-group">
    <label for="message">Message</label>
    <textarea value={message} name="message" onChange={handleInputChange} type="text" className="form-control" rows="3"></textarea>
  </div>
  <button type="submit" onClick={handleFormSubmit} onChange={handleInputChange} className="btn btn-primary mb-2">Submit</button>
</form>
    </div>
    <div>
        <p>{errorMessage} </p>
        <p>{formSubmitted}</p>
    </div>
    <Footer />
    </div>
      )
}