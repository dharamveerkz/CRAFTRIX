import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition"
        >
          CRAFT<span className="text-gray-500">RIX</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="#work" className="hover:text-gray-900 transition">
            Products
          </Link>
          <Link href="#prototypes" className="hover:text-gray-900 transition">
            Prototypes
          </Link>
          <Link href="#process" className="hover:text-gray-900 transition">
            Process
          </Link>
          <Link href="#orders" className="hover:text-gray-900 transition">
            Orders
          </Link>
        </nav>
        <Link
          href="#orders"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          Get a Quote
        </Link>
        {/* Mobile Menu Toggle (can be expanded with client state) */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
