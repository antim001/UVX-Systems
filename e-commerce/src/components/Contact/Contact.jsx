import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Handle form submission (e.g., send data to an API)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-5">
      <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
      <p className="text-center mb-10 text-lg text-gray-600">
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 h-32 resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
        {isSubmitted && <p className="text-green-500 text-center mt-5">Your message has been sent successfully!</p>}
      </form>
      <div className="flex flex-col mt-10 space-y-4 text-center">
        {/* <div className="flex items-center justify-center space-x-2">
          <FaPhone className="text-blue-600" />
          <span className="text-gray-600">(123) 456-7890</span>
        </div> */}
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-blue-600" />
          <span className="text-gray-600">info@aioalliance.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <span className="text-gray-600">1234 Elm Street ,Suite 567 Springfield, IL 62701, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
