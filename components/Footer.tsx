"use client";
import Link from "next/link";

// Inline SVG components (no external dependency)
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-950 text-gray-400 text-sm px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-10">
        {/* ── Brand & Social ── */}
        <div className="md:col-span-1">
          <div className="text-white font-bold text-lg mb-2">
            CRAFT<span className="text-gray-500">RIX</span>
          </div>
          <p className="mb-4 max-w-xs leading-relaxed">
            Manufacturing premium custom-crafted garments with precision and
            passion. Your vision, stitched to perfection.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a
              href="https://instagram.com/craftrixgarments"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://facebook.com/craftrixgarments"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:orders@craftrix.com"
              className="hover:text-gray-300 transition"
              aria-label="Email"
            >
              <MailIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* ── Products ── */}
        <div>
          <h4 className="text-white font-semibold mb-3">Products</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#work" className="hover:text-white transition">
                Premium Shirts
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-white transition">
                T-Shirts & Tees
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-white transition">
                Trousers
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-white transition">
                School Uniforms
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-white transition">
                Sports Kits
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Company ── */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#work" className="hover:text-white transition">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="#prototypes" className="hover:text-white transition">
                Prototypes
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-white transition">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="#orders" className="hover:text-white transition">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MailIcon className="w-[14px] h-[14px]" />
              <a
                href="mailto:orders@craftrix.com"
                className="hover:text-white transition"
              >
                orders@craftrix.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircleIcon className="w-[14px] h-[14px]" />
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp Business
              </a>
            </li>
            <li className="text-gray-500">🕐 Mon–Sat, 10AM–7PM IST</li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {currentYear} CRAFTRIX Garments Enterprises. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <span>💳 DEBIT/credit card</span>
          <span>🏦 Bank Transfer</span>
          <span>💵 upi</span>
          <span>🌐 net banking</span>
        </div>
      </div>
    </footer>
  );
}
