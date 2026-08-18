"use client";

export default function KShape() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Logo Blue Left Wing Gradient */}
        <linearGradient id="kLogoBlueLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16648e" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#0d4969" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#072638" stopOpacity="0.98" />
        </linearGradient>

        {/* Logo Blue Right Wing Gradient */}
        <linearGradient id="kLogoBlueRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#16648e" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#0d4969" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#072638" stopOpacity="0.98" />
        </linearGradient>

        {/* Blueprint Line Pattern */}
        <pattern id="kBlueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* ================= LEFT STEM WING ================= */}
      <g className="kLeft">
        <polygon
          points="-500,-300 520,-300 950,1080 620,1500 -500,1500"
          fill="url(#kLogoBlueLeft)"
        />
        <polygon
          points="-500,-300 520,-300 950,1080 620,1500 -500,1500"
          fill="url(#kBlueprintGrid)"
        />
        {/* Bevel Line */}
        <polyline
          points="520,-300 950,1080 620,1500"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="2.5"
        />
        <polyline
          points="495,-300 925,1080 595,1500"
          fill="none"
          stroke="rgba(22, 100, 142, 0.85)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
      </g>

      {/* ================= RIGHT DIAGONAL WING ================= */}
      <g className="kRight">
        <polygon
          points="1360,-800 2500,-800 2500,1300 1850,960 970,550"
          fill="url(#kLogoBlueRight)"
        />
        <polygon
          points="1360,-800 2500,-800 2500,1300 1850,960 970,550"
          fill="url(#kBlueprintGrid)"
        />
        {/* Bevel Line */}
        <polyline
          points="1360,-800 970,550 1850,960"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="2.5"
        />
        <polyline
          points="1385,-800 995,550"
          fill="none"
          stroke="rgba(22, 100, 142, 0.85)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
      </g>
    </svg>
  );
}