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

const BASE_FORM = {
  fullName: "",
  companyName: "",
  mobile: "",
  email: "",
  city: "",
  state: "",
  projectDetails: ""
};

export default function EnquiryForm({
  id = "enquiry",
  title = "Architect Enquiry Form",
  description = "Share your project details and our team will get in touch with product information and support.",
  successMessage = "Our architectural project specialist will review your project details and connect with you shortly.",
  extraSelects = [],
  extraFields = [],
  showEmail = false,
  twoColumn = false,
  detailsFullWidth = true,
  submitLabel = "Submit Enquiry",
  companyLabel = "Company Name",
  companyPlaceholder = "Enter company name",
  detailsLabel = "Project Details",
  detailsPlaceholder = "Tell us about your project, building type and lighting requirements...",
  note = "Your information will be used to contact you regarding your enquiry.",
  variant = "light"
}) {
  const dark = variant === "dark" || variant === "blue";
  const panelClass =
    variant === "blue"
      ? "bg-gradient-to-br from-brand-footer-mid to-brand-footer border border-blue-800/40"
      : dark
        ? "bg-brand-navy border border-blue-900/40"
        : "bg-white border border-blue-100";

  const makeInitialForm = () => {
    const extra = {};
    extraSelects.forEach((field) => {
      extra[field.name] = "";
    });
    extraFields.forEach((field) => {
      extra[field.name] = "";
    });
    return { ...BASE_FORM, ...extra };
  };

  const [formData, setFormData] = useState(makeInitialForm);
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

  const labelCls = `block text-xs font-bold mb-1 ${dark ? "text-gray-200" : "text-gray-700"}`;
  const fieldCls = `w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all placeholder:text-gray-400 ${
    dark ? "border-transparent bg-white" : "border-gray-200"
  }`;
  const selectCls = `w-full px-3 py-2.5 rounded-lg border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all bg-white ${
    dark ? "border-transparent" : "border-gray-200"
  }`;

  const cityField = (
    <div>
      <label className={labelCls}>
        City <span className="text-red-500">*</span>
      </label>
      <select
        name="city"
        required
        value={formData.city}
        onChange={handleChange}
        className={selectCls}
      >
        <option value="" disabled>Select city</option>
        {MAJOR_CITIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );

  const stateField = (
    <div>
      <label className={labelCls}>
        State <span className="text-red-500">*</span>
      </label>
      <select
        name="state"
        required
        value={formData.state}
        onChange={handleChange}
        className={selectCls}
      >
        <option value="" disabled>Select state</option>
        {INDIAN_STATES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div
      id={id}
      className={`rounded-2xl shadow-[0_0px_8px_rgba(0,0,0,0.06)] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between ${panelClass}`}
    >
      {/* Decorative top accent line (light variant only) */}
      {!dark && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-blue" />
      )}

      <div>
        <h3 className={`text-xl sm:text-2xl font-bold mb-1.5 tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-xs sm:text-sm leading-snug mb-5 ${dark ? "text-gray-300" : "text-gray-500"}`}>
            {description}
          </p>
        )}

        {submitted ? (
          <div
            className={`rounded-xl p-6 text-center my-4 border ${
              dark ? "bg-white/10 border-white/20" : "bg-brand-light-bubble border-blue-200"
            }`}
          >
            <CheckCircle2 className={`w-10 h-10 mx-auto mb-2 ${dark ? "text-brand-accent-light" : "text-brand-blue"}`} />
            <h4 className={`font-bold text-base mb-1 ${dark ? "text-white" : "text-brand-navy"}`}>
              Thank You for Reaching Out!
            </h4>
            <p className={`text-xs sm:text-sm ${dark ? "text-gray-200" : "text-gray-600"}`}>
              {successMessage}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData(makeInitialForm());
              }}
              className={`mt-4 text-xs font-semibold hover:underline ${dark ? "text-brand-accent-light" : "text-brand-accent"}`}
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={twoColumn ? "grid grid-cols-1 sm:grid-cols-2 gap-3.5" : "space-y-3.5"}>
            {/* Full Name */}
            <div>
              <label className={labelCls}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={fieldCls}
              />
            </div>

            {/* Company / Organization Name */}
            <div>
              <label className={labelCls}>
                {companyLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder={companyPlaceholder}
                className={fieldCls}
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className={labelCls}>
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className={fieldCls}
              />
            </div>

            {/* Email Address (optional) */}
            {showEmail && (
              <div>
                <label className={labelCls}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className={fieldCls}
                />
              </div>
            )}

            {/* City & State */}
            {twoColumn ? (
              <>
                {cityField}
                {stateField}
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {cityField}
                {stateField}
              </div>
            )}

            {/* Dynamic select fields (e.g. bulk order product & quantity) */}
            {extraSelects.map((field) => (
              <div key={field.name}>
                <label className={labelCls}>
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <select
                  name={field.name}
                  required
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="" disabled>{field.placeholder}</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* Dynamic text fields (e.g. website / social profile) */}
            {extraFields.map((field) => {
              const isRequired = field.required !== false;
              return (
                <div key={field.name}>
                  <label className={labelCls}>
                    {field.label} {isRequired && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    required={isRequired}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={fieldCls}
                  />
                </div>
              );
            })}

            {/* Details */}
            <div className={twoColumn && detailsFullWidth ? "sm:col-span-2" : ""}>
              <label className={labelCls}>
                {detailsLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDetails"
                required
                rows={3}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder={detailsPlaceholder}
                className={`${fieldCls} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer ${
                twoColumn ? "sm:col-span-2" : ""
              }`}
            >
              <span>{loading ? "Submitting..." : submitLabel}</span>
              <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>

      {/* Security Footnote */}
      <div
        className={`mt-4 pt-3 border-t flex items-center justify-center gap-1.5 text-[11px] text-gray-400 ${
          dark ? "border-white/10" : "border-gray-100"
        }`}
      >
        <Lock className="w-3 h-3 text-gray-400 flex-shrink-0" />
        <span>{note}</span>
      </div>
    </div>
  );
}
