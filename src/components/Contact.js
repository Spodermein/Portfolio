import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent from ${name} at ${email}`);
        setName('');
        setEmail('');

        // EmailJS configuration (replace these values with your own credentials)
        const serviceID = 'your_service_id'; // Replace with your service ID
        const templateID = 'your_template_id'; // Replace with your template ID
        const userID = 'your_user_id'; // Replace with your user ID

        // Sending the email using EmailJS
        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Message sent successfully:', result.text);
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log('Error sending message:', error.text);
                alert('There was an error sending your message. Please try again.');
            });
    };

    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name" // Important for EmailJS form data
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email" // Important for EmailJS form data
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message" // Important for EmailJS form data
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
