"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import {
  CATEGORY_OPTIONS,
  PRODUCT_OPTIONS,
  getEnquiryContent
} from "../data/enquiry";

const BASE_FORM = {
  fullName: "",
  companyName: "",
  mobile: "",
  email: "",
  product: "",
  category: "",
  projectDetails: ""
};

export default function EnquiryForm({
  id = "enquiry",
  variant = "light",
  twoColumn = false,
  isPopup = false,
  source,
  className = ""
}) {
  const pathname = usePathname();
  const content = getEnquiryContent(source || pathname);

  const dark = variant === "dark" || variant === "blue";
  const panelClass =
    variant === "blue"
      ? "bg-gradient-to-br from-brand-footer-mid to-brand-footer border border-blue-800/40"
      : dark
        ? "bg-brand-navy border border-blue-900/40"
        : "bg-white border border-blue-100";

  const [formData, setFormData] = useState(() => ({ ...BASE_FORM }));
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
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

  const productField = (
    <div>
      <label className={labelCls}>
        {content.productLabel} <span className="text-red-500">*</span>
      </label>
      <select
        name="product"
        required
        value={formData.product}
        onChange={handleChange}
        className={selectCls}
      >
        <option value="" disabled>Select product</option>
        {PRODUCT_OPTIONS.map((product) => (
          <option key={product} value={product}>{product}</option>
        ))}
      </select>
    </div>
  );

  const categoryField = (
    <div>
      <label className={labelCls}>
        {content.categoryLabel} <span className="text-red-500">*</span>
      </label>
      <select
        name="category"
        required
        value={formData.category}
        onChange={handleChange}
        className={selectCls}
      >
        <option value="" disabled>Select category</option>
        {CATEGORY_OPTIONS.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div
      id={id}
      className={`rounded-2xl shadow-[0_0px_8px_rgba(0,0,0,0.06)] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between ${panelClass} ${className}`}
    >
      {!dark && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-blue" />
      )}

      <div>
        <h3 className={`text-xl sm:text-2xl font-bold mb-1.5 tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}>
          {content.title}
        </h3>
        {content.description && (
          <p className={`text-xs sm:text-sm leading-snug mb-5 ${dark ? "text-gray-300" : "text-gray-500"}`}>
            {content.description}
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
              {content.successMessage}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ ...BASE_FORM });
              }}
              className={`mt-4 text-xs font-semibold hover:underline ${dark ? "text-brand-accent-light" : "text-brand-accent"}`}
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={twoColumn ? "grid grid-cols-1 sm:grid-cols-2 gap-3.5" : "space-y-3.5"}
          >
            <div>
              <label className={labelCls}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={fieldCls}
              />
            </div>

            <div>
              <label className={labelCls}>
                {content.companyLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                autoComplete="organization"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={content.companyPlaceholder}
                className={fieldCls}
              />
            </div>

            <div>
              <label className={labelCls}>
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                autoComplete="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className={fieldCls}
              />
            </div>

            <div>
              <label className={labelCls}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className={fieldCls}
              />
            </div>

            {twoColumn ? (
              <>
                {productField}
                {categoryField}
              </>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {productField}
                {categoryField}
              </div>
            )}

            <div className={twoColumn ? "sm:col-span-2" : ""}>
              <label className={labelCls}>
                {content.queryLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDetails"
                required
                rows={isPopup ? 2 : 3}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder={content.queryPlaceholder}
                className={`${fieldCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer ${
                twoColumn ? "sm:col-span-2" : ""
              }`}
            >
              <span>{loading ? "Submitting..." : content.submitLabel}</span>
              <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>

      <div
        className={`mt-4 pt-3 border-t flex items-center justify-center gap-1.5 text-[11px] text-gray-400 ${
          dark ? "border-white/10" : "border-gray-100"
        }`}
      >
        <Lock className="w-3 h-3 text-gray-400 flex-shrink-0" />
        <span>{content.note}</span>
      </div>
    </div>
  );
}
