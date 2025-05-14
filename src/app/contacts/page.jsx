import React from "react";

const Contacts = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-serif font-bold text-center mb-10">
        Contact Us
      </h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
