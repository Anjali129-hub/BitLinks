"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const generate = async () => {
    if (!url || !shortUrl) {
      setMessage("Please fill in both fields!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await res.json();

      if (res.ok) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        setMessage(result.message || "Short URL generated!");
      } else {
        setMessage(result.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setMessage("Copied to clipboard!");
  };

  return (
    <div className="mx-auto max-w-md bg-purple-100 my-16 p-8 rounded-xl flex flex-col gap-6 shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Generate Your Short URLs</h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          className="px-4 py-3 rounded-md focus:outline-purple-600 focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          placeholder="Enter your preferred short URL text"
          className="px-4 py-3 rounded-md focus:outline-purple-600 focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={generate}
          disabled={loading || !url || !shortUrl}
          className={`bg-purple-500 rounded-lg shadow-lg p-3 font-bold text-white hover:bg-purple-600 transition disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {message && <p className="text-center text-purple-700 font-medium">{message}</p>}

      {generated && (
        <div className="flex flex-col gap-2 items-center mt-4 bg-white p-4 rounded-lg shadow-md">
          <span className="font-bold text-lg">Your Short URL:</span>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link href={generated} target="_blank" className="text-purple-700 underline break-all">
              {generated}
            </Link>
            <button
              onClick={copyToClipboard}
              className="bg-purple-500 text-white px-4 py-1 rounded-lg font-medium hover:bg-purple-600 transition"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
