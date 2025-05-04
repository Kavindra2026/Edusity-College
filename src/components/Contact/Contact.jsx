import React from "react";
import "./Contact.css";
import msg_icon from "../../../public/assets/msg-icon.png";
import mail_icon from "../../../public/assets/mail-icon.png";
import phone_icon from "../../../public/assets/phone-icon.png";
import location_icon from "../../../public/assets/location-icon.png";
import white_arrow from "../../../public/assets/white-arrow.png";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "15318373-002a-41b9-8c12-bf96b31c2e61");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      // setResult("Form Submitted Successfully");
      event.target.reset();
      //  Show Pupop
      Swal.fire({
        title: "Submitted Your Masseage Successful!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@kavindra81710@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            Sector 63, Near By Electronic City<br></br> Noida, Uttar Pradesh
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} className="form">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            aotucomplete="off"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            required
            aotucomplete="off"
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            aotucomplete="off"
          ></textarea>
          <div>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={white_arrow} alt="" />
            </button>
            <span>{result}</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
