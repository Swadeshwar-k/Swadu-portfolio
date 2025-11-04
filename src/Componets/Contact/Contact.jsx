
import React, { useRef } from "react";
import "./Contact.css";
import Mail from "../../assets/mail_icon.svg";
import Location from "../../assets/location_icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [state, handleSubmit] = useForm("xovpopba");
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      toast.success("Thanks for contacting me! 😊", {
        position: "top-right",
        autoClose: 3000,
      });

      // ✅ Clear form fields
      formRef.current.reset();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm always looking to grow and learn. If you have opportunities,
            ideas, or just want to connect—let’s chat!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={Mail} alt="Mail_Icon" />
              <p>swadeshwarko@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="Location_Icon" />
              <p>Chennai, India</p>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Enter Your Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" name="email" placeholder="Enter Your Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            className="contact-submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
