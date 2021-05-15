import React, { useState } from 'react'
import { db } from "../components/firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //state to check whether the form has been submitted
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //when the user submits we want to make sure that the loader is set to true
        setLoader(true);

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert("Message has been submitted");
            //after the info has been submitted we set the lodeer to false
            setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            //if there is an error, set the loader to false
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <h1>Contact Form</h1>

            <label>Name</label>
            <input 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea 
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button 
                type="submit"
                style={
                    {background : loader ? "#ccc" : "rgb(2, 2, 110)"}
                }
            >Submit</button>
        </form>
    )
}

export default Contact
