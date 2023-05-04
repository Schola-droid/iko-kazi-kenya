import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contacts = () => {
  return (
    <div id="contacts">
      <main>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact us.
        </p>
        <form>
          <label htmlFor="name">
            Name:
            <br />
            <input type="text" id="name" name="name" required />
          </label>

          <label htmlFor="email">
            Email:
            <br />
            <input type="email" id="email" name="email" required />
          </label>

          <label htmlFor="subject">
            Subject:
            <br />
            <input type="text" id="subject" name="subject" required />
          </label>

          <label htmlFor="message">
            Message:
            <br />
            <textarea id="message" name="message" required></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
