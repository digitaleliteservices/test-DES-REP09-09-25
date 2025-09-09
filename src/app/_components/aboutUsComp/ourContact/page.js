"use client";
import Head from 'next/head';

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Only numbers
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "https://server.plumeriaresort.in/digitaleliteservice/sendMail",
        formData
      );
      toast.success("Message Sent Successfully");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        website: "",
        service: "",
      });
    } catch (error) {
      toast.error("Failed to send the message!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181625] relative overflow-hidden pt-32 mt-5 pb-20 ">
     {/* Add SEO Head */}
      <Head>
        <title>Contact Us | Digital Elite Services - Best Digital Marketing Agency in Bangalore</title>
        <meta name="description" content="Get expert digital marketing services including SEO, PPC, social media marketing, and web development from Digital Elite Services in Bangalore." />
        <meta name="keywords" content="Digital marketing services, Social media marketing, SEO services, PPC advertising, Web development, Branding services, Online marketing, E-commerce marketing, Lead generation, Email marketing" />
        <meta name="author" content="Digital Elite Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Digital Elite Services - Digital Marketing Experts in Bangalore" />
        <meta property="og:description" content="Reach out to Digital Elite Services for professional web development and digital marketing solutions in Bangalore." />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Digital Elite Services" />
        <meta name="twitter:description" content="Get expert digital marketing services from Digital Elite Services in Bangalore." />
      </Head>
    
      {/* Purple glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-400/50 to-transparent pointer-events-none" />

      {/* Content wrapper */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 z-10 px-4">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Perfect
          </h4>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            You start us off.
            <br />
            We take it from there.
          </h1>
        </div>

        {/* Right Side Form Card */}
        <div className="flex-1 flex flex-col justify-center pt-6">
          <div className="bg-[#232035] rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="w-full rounded-lg bg-[#282442] border-none py-3 px-4 text-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="w-full rounded-lg bg-[#282442] border-none py-3 px-4 text-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="w-full rounded-lg bg-[#282442] border-none py-3 px-4 text-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>

              {/* Company */}
              <div>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full rounded-lg bg-[#282442] border-none py-3 px-4 text-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>

              {/* Website */}
              <div>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="Company Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full rounded-lg bg-[#282442] border-none py-3 px-4 text-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>

              {/* Service Select */}
              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="p-2 rounded bg-white border border-yellow-300 text-[#3b2c0a] text-sm w-full"
                >
                  <option value="">Choose Preferred Service</option>
                  <option value="SEO">SEO</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-2 rounded-xl font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-blue-900 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send!"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default OurContact;
