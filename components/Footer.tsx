import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-gray-950 text-gray-400 text-sm px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="text-white font-bold text-lg mb-2">
            CRAFT<span className="text-gray-500">RIX</span>
          </div>
          <p className="mb-4 max-w-xs">
            Manufacturing premium custom-crafted garments with precision and
            passion. Your vision, stitched to perfection.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="https://instagram.com/craftrixgarments"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="https://facebook.com/craftrixgarments"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              👤
            </a>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              className="hover:text-white transition"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              href="mailto:orders@craftrix.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              ✉️
            </a>
          </div>
        </div>
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
        <div>
          <h4 className="text-white font-semibold mb-3">Info</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Quality Promise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Bulk Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Delivery Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {currentYear} CRAFTRIX Garments Enterprises. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span>💳 bKash</span>
          <span>💰 Nagad</span>
          <span>🏦 Bank Transfer</span>
          <span>💵 Cash</span>
          <span>🌐 PayPal</span>
        </div>
      </div>
    </footer>
  );
}
