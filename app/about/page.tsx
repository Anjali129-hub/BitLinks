"use client";
import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-12 md:py-24 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center md:text-left flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800">
          About BitLinks
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
          BitLinks is a simple, fast, and secure URL shortener. Unlike other services, we never track your data and you don’t need to create an account.
        </p>
      </div>

      {/* Features / Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-purple-800">Fast & Easy</h2>
          <p className="leading-relaxed">
            Shorten URLs in just a few clicks. No complex steps or sign-ups needed.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-purple-800">Secure & Private</h2>
          <p className="leading-relaxed">
            Your links are safe. We do not track, store, or share your personal information.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-purple-800">Custom URLs</h2>
          <p className="leading-relaxed">
            Create your own custom short URLs easily, so they are meaningful and easy to share.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-purple-800">Reliable</h2>
          <p className="leading-relaxed">
            BitLinks ensures your shortened URLs work every time, without downtime or errors.
          </p>
        </div>
      </div>

      {/* Illustration or Image */}
      <div className="flex justify-center mt-10">
        <img
          src="/about-illustration.svg"
          alt="About BitLinks Illustration"
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
