import React, { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null); // To track submission status

    const SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/<form_id>/subscribe`; // Replace <form_id> with your actual form ID

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const payload = JSON.stringify({
            email,
            first_name: name,
            api_key: process.env.REACT_APP_CONVERTKIT_API_KEY, // Use your API key
        });

        try {
            const response = await fetch(SUBSCRIBE_URL, {
                method: "POST",
                body: payload,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json; charset=utf-8",
                },
            });

            if (response.ok) {
                setStatus("SUCCESS");
            } else {
                throw new Error("Failed to subscribe");
            }
        } catch (error) {
            console.error(error);
            setStatus("ERROR");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <button type="submit">SUBSCRIBE</button>
            {status === "SUCCESS" && <p>Thank you for subscribing!</p>}
            {status === "ERROR" && <p>There was an error. Please try again.</p>}
        </form>
    );
};

export {SubscribeForm};
