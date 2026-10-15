"use client";

import { useState } from "react";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

const INDIAN_STATES = [
  "Delhi NCR",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Telangana",
  "West Bengal",
  "Rajasthan",
  "Uttar Pradesh",
  "Punjab",
  "Haryana",
  "Madhya Pradesh",
  "Kerala",
  "Other"
];

const MAJOR_CITIES = [
  "New Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Pune",
  "Kolkata",
  "Jaipur",
  "Chandigarh",
  "Lucknow",
  "Other"
];

export default function ArchitectEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobile: "",
    city: "",
    state: "",
    projectDetails: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="enquiry" className="bg-white border border-blue-100 rounded-2xl shadow-sm p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-blue" />

      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mb-1.5 tracking-tight">
          Architect Enquiry Form
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5">
          Share your project details and our team will get in touch with product information and support.
        </p>

        {submitted ? (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center my-4 animate-in fade-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-brand-blue mx-auto mb-2" />
            <h4 className="font-bold text-brand-navy text-base mb-1">
              Thank You for Reaching Out!
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our architectural project specialist will review your project details and connect with you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  companyName: "",
                  mobile: "",
                  city: "",
                  state: "",
                  projectDetails: ""
                });
              }}
              className="mt-4 text-xs font-semibold text-brand-accent hover:underline"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all placeholder:text-gray-400"
              />
            </div>

            {/* City & State Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all bg-white"
                >
                  <option value="" disabled>Select city</option>
                  {MAJOR_CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all bg-white"
                >
                  <option value="" disabled>Select state</option>
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDetails"
                required
                rows={3}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us about your project, building type and lighting requirements..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        )}
      </div>

      {/* Security Footnote */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
        <Lock className="w-3 h-3 text-gray-400 flex-shrink-0" />
        <span>Your information will be used to contact you regarding your enquiry.</span>
      </div>
    </div>
  );
}
