"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import EnquiryForm from "../EnquiryForm";
import { ENQUIRY_EVENT } from "./EnquiryTrigger";

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState(undefined);

  useEffect(() => {
    const handleOpen = (event) => {
      setSource(event.detail?.source);
      setOpen(true);
    };

    window.addEventListener(ENQUIRY_EVENT, handleOpen);
    return () => window.removeEventListener(ENQUIRY_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-deep/80 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        className="relative w-full max-w-2xl lg:max-w-[720px] rounded-2xl shadow-2xl my-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close enquiry form"
          autoFocus
          className="absolute right-4 top-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="size-5" strokeWidth={1.8} />
        </button>
        <EnquiryForm
          key={source || "page"}
          source={source}
          variant="dark"
          twoColumn={true}
          isPopup={true}
        />
      </div>
    </div>
  );
}
