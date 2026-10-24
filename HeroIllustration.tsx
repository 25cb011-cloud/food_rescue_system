// A simple nature-inspired illustration drawn with SVG (shapes written as code).
// It scales to any size and needs no image download.
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 440"
      role="img"
      aria-label="Illustration of a basket of fresh fruit, bread and vegetables with leaves"
      className="h-auto w-full"
    >
      {/* soft background blobs */}
      <circle cx="240" cy="220" r="200" fill="#e3f0e1" />
      <circle cx="380" cy="90" r="46" fill="#f5eedb" />

      {/* big leaves behind the basket */}
      <path d="M120 250 C60 190 70 110 150 90 C170 160 160 210 120 250Z" fill="#5aa469" />
      <path d="M360 250 C420 190 410 110 330 90 C310 160 320 210 360 250Z" fill="#2a7650" />
      <path d="M240 230 C200 150 210 80 240 50 C270 80 280 150 240 230Z" fill="#1f5a3c" />

      {/* food */}
      <circle cx="190" cy="250" r="34" fill="#e0693f" /> {/* tomato / apple */}
      <path d="M190 218 q10 -16 22 -10" stroke="#17432d" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="270" cy="256" rx="40" ry="26" fill="#d9a24a" /> {/* bread loaf */}
      <path d="M248 246 l10 14 M266 242 l10 16 M284 246 l8 12" stroke="#b9822f" strokeWidth="5" strokeLinecap="round" />
      <circle cx="320" cy="262" r="26" fill="#f2b84b" /> {/* orange */}
      <circle cx="232" cy="270" r="22" fill="#8bc16a" /> {/* green apple */}

      {/* basket */}
      <path d="M130 280 H350 L330 390 Q328 400 318 400 H162 Q152 400 150 390Z" fill="#b98a55" />
      <path d="M130 280 H350" stroke="#8d6638" strokeWidth="10" strokeLinecap="round" />
      <path d="M160 310 H322 M166 340 H316 M172 370 H310" stroke="#8d6638" strokeWidth="6" strokeLinecap="round" />

      {/* hands of care: a small heart */}
      <path
        d="M240 120 c-10 -18 -38 -8 -28 14 c6 12 28 26 28 26 s22 -14 28 -26 c10 -22 -18 -32 -28 -14z"
        fill="#e0693f"
        opacity="0.95"
      />
    </svg>
  )
}
