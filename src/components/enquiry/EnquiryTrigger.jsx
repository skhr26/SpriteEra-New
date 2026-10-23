"use client";

export const ENQUIRY_EVENT = "vajra:open-enquiry";

export function openEnquiry(source) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(ENQUIRY_EVENT, { detail: { source } })
  );
}



export default function EnquiryTrigger({
  source,
  className = "",
  children,
  ariaLabel,
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      className={className}
      onClick={() => openEnquiry(source)}
      {...props}
    >
      {children}
    </button>
  );
}
