import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post('http://localhost:5000/api/contact/create',{
            name, email, subject, body
        });

        toast.success("Message sent successfully");
        navigate('/');

    } catch (error) {
        console.log(error);
        toast.error(error);
    }    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <form
        onSubmit={handleData}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Contact Us
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Type subject"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter your message"
            className="w-full px-3 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
