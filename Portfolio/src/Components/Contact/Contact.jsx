// ...existing code...
import React, { useState } from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ffea4844-96ee-4356-b036-dcabf4235277",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-tittle">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="Mail Icon" />
                        <p>duminduekanayake6@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="Call Icon" />
                        <p>+94-71 9071 750</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="Location Icon" />
                        <p>Kurunegala</p>
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange} />
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} />
                <label htmlFor="message">Write your message here</label>
                <textarea id="message" placeholder="Enter your message" name='message' rows={8} value={formData.message} onChange={handleChange}></textarea>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
            </form>
            
        </div>

    </div>
  )
}

export default Contact
// ...existing code...