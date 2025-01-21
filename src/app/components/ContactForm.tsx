import React from 'react';

const ContactForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded-md"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          className="w-full p-2 border rounded-md"
          rows={5}
          placeholder="Enter your message"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#2A254B] text-white p-3 rounded-md hover:bg-blue-900"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
