"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, Building, Mail, User, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ProjectEnquiryModal({ isOpen, onClose, defaultDiscipline = "Architecture" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: defaultDiscipline,
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultDiscipline) {
      setFormData((prev) => ({ ...prev, discipline: defaultDiscipline }));
    }
  }, [defaultDiscipline]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          discipline: defaultDiscipline,
          location: "",
          message: "",
        });
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#072638]/75 backdrop-blur-md transition-opacity"
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-[#0d4969]/20 bg-white p-6 sm:p-8 shadow-2xl z-10">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0d4969]/5 text-gray-400 hover:bg-[#0d4969]/15 hover:text-[#0d4969] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d97736]/10 text-[#d97736]">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-light text-[#0d4969]">Project Brief Received</h3>
            <p className="max-w-md text-sm text-gray-500 font-light leading-relaxed">
              Thank you. Our studio partners will review your project requirements and connect with you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* MODAL HEADER */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#d97736]">
                <Sparkles size={12} />
                <span>Direct Studio Enquiry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0d4969]">
                Initiate a Commission
              </h3>
              <p className="text-xs sm:text-sm font-light text-gray-500">
                Share your site details and project vision with our multidisciplinary team.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500">
                    Full Name / Organization *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Nambiar"
                      className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#0d4969] placeholder:text-gray-400 focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#0d4969] placeholder:text-gray-400 focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* PHONE */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 00000"
                    className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#0d4969] placeholder:text-gray-400 focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* DISCIPLINE */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-gray-500">
                    Primary Discipline
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#0d4969] focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Landscape Architecture">Landscape Architecture</option>
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="Urban Planning & Master Design">Urban Planning & Master Design</option>
                    <option value="Interior Architecture">Interior Architecture</option>
                    <option value="Sustainability Consultation">Sustainability Consultation</option>
                    <option value="Integrated Multi-Disciplinary">Integrated Multi-Disciplinary</option>
                  </select>
                </div>
              </div>

              {/* LOCATION & SCOPE */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-gray-500">
                  Site Location & Approximate Scale
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Kovalam, Kerala (2.5 Acres / 12,000 sq.ft)"
                  className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#0d4969] placeholder:text-gray-400 focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-gray-500">
                  Project Brief & Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your timeline, site topography, or key functional goals..."
                  className="w-full rounded-xl border border-[#0d4969]/15 bg-[#fafafa] px-3.5 py-2 text-xs text-[#0d4969] placeholder:text-gray-400 focus:border-[#0d4969] focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0d4969] py-3 text-xs font-medium uppercase tracking-wider text-white shadow-md hover:bg-[#d97736] transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
