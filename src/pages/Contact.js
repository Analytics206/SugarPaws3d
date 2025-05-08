import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, feel free to reach out!</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;