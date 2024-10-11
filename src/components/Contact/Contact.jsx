import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../../assets/img/contact-img.svg";

const Contact = () => {
    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
      });

      const onFormUpdate = (category, value) => {
        setFormData({
          ...formData,
          [category]: value,
        });
      };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-row">
          <div className="contact-img-box">
            <img src={contactImg} alt="Contact Us" />
          </div>
          <div className="contact-form-box">
            <h2>Get In Touch</h2>
            <form onSubmit={"#"}>
              <div className="form-row">
                <div className="form-input-box">
                  <input
                    type="text"
                    value={formData.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  />
                </div>
                <div className="form-input-box">
                  <input
                    type="text"
                    value={formData.lastname}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastname", e.target.value)}
                  />
                </div>
                <div className="form-input-box">
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div className="form-input-box">
                  <input
                    type="tel"
                    value={formData.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="form-input-box">
                  <textarea
                    rows="6"
                    value={formData.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                </div>
                <div className="form-input-box">
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="dark-mode-divider"></div>
    </section>


  );
};

export default Contact;
