import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>For more information, please visit our <Link to="/contact-details">Contact Details</Link> page.</p>
        </div>
    );
}

export default ContactUs;
