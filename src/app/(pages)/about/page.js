"use client";
import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
          About Explore The World
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Explore The World</span> — your trusted travel companion in discovering hidden gems, breathtaking destinations, and unforgettable experiences around the globe.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://st.depositphotos.com/1500858/4082/i/450/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg"
            alt="Travel Image"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is simple: inspire people to explore, connect with different cultures, and make memories that last a lifetime.
            </p>
            <p>
              Whether you're planning a weekend getaway or a world tour, we offer curated travel guides, real user reviews, and expert tips to make every trip stress-free and magical.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🌍 Handpicked destinations and travel insights</li>
            <li>🧭 Easy-to-use tools for planning your trip</li>
            <li>💬 Real reviews from global explorers</li>
            <li>🤝 Community-driven travel inspiration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
