import React, { useState } from "react";
import "./ContactUs.css";
import { FaLinkedin } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    let valid = true;

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email";
      valid = false;
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone must be 10 digits";
      valid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    window.location.href = `mailto:{addemail}?subject=Contact%20Form%20Submission&body=Name:%20${formData.firstName}%20${formData.lastName}%0AEmail:%20${formData.email}%0APhone:%20${formData.phone}%0AMessage:%20${formData.message}`;

    alert("Your message has been submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-section glass-glow">
      <div className="contact-header glow-text">
        <h2>Contact Us On</h2>
        <div className="linkedin-center">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
        <p className="highlight-email">Email: viksha@rvu.edu.in</p>
        <p>Socials: Instagram, LinkedIn</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Let’s get in touch!</h3>

        <div className="form-row">
          <div className="form-group glass-input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="form-group glass-input">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group glass-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group glass-input">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group glass-input full-width">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn glow-border">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
