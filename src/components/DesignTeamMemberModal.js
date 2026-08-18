"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function DesignTeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl text-[#0d4969]">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#0d4969] hover:bg-[#0d4969] hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#d97736]">
              Design Team
            </span>
            <h3 className="text-2xl font-light text-[#0d4969]">{member.name}</h3>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {member.role}
            </p>
            <p className="pt-3 text-sm font-light leading-relaxed text-gray-700">
              {member.bio}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#0d4969]/10 pt-6">
          <Link
            href="/join-us"
            className="rounded-full bg-[#0d4969] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#d97736] transition-colors"
          >
            Join Design Atelier
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
