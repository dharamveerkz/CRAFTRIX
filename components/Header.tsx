"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Close mobile menu when clicking a link
  const handleNavClick = () => setMobileMenuOpen(false);

  // Track active section for highlighting (simple scroll-based)
  useEffect(() => {
    const sections = ["hero", "work", "prototypes", "process", "orders"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll for anchor links (Next.js Link doesn't handle #anchors perfectly)
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL without reload
      window.history.pushState(null, "", href);
    }
    handleNavClick();
  };

  const navItems = [
    { href: "#work", label: "Products" },
    { href: "#prototypes", label: "Prototypes" },
    { href: "#process", label: "Process" },
    { href: "#orders", label: "Orders" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleAnchorClick(e, "#hero")}
          className="flex flex-col"
          aria-label="CRAFTRIX — Garments Enterprises"
        >
          <span className="text-xl font-bold tracking-tight text-gray-900">
            CRAFT<span className="text-gray-400">RIX</span>
          </span>
          <span className="text-[10px] text-gray-400 -mt-0.5 hidden sm:block">
            Garments Enterprises
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className={`text-sm font-medium transition ${
                activeSection === item.href.slice(1)
                  ? "text-gray-900 border-b-2 border-gray-900 pb-0.5"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#orders"
            onClick={(e) => handleAnchorClick(e, "#orders")}
            className="ml-2 inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
                  activeSection === item.href.slice(1)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#orders"
              onClick={(e) => handleAnchorClick(e, "#orders")}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
