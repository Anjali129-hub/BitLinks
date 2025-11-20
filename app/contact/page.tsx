"use client";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks ${name}, we received your message!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="max-w-lg mx-auto p-6 md:p-16 bg-purple-100 rounded-xl shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 rounded-md focus:outline-purple-600 focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-md focus:outline-purple-600 focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 rounded-md focus:outline-purple-600 focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
