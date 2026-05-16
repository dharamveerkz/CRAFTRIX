"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
import Link from "next/link";

export default function HomePage() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hostname === window.location.hostname) {
        e.preventDefault();
        const el = document.querySelector(target.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", target.hash);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* ✅ Reusable Header */}
      <Header />

      <main className="flex-1">
        {/* ───────── HERO ───────── */}
        <section
          id="hero"
          className="py-20 md:py-32 px-4 text-center bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600">
              Premium Garment Manufacturing
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Crafted for <span className="text-gray-400">every occasion.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From precision-tailored uniforms to bold custom streetwear —
              CRAFTRIX delivers premium garments built to your exact
              specification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#orders"
                className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                Start Your Order
              </a>
              <a
                href="#work"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>

        {/* ───────── STATS ───────── */}
        <section className="py-12 border-y border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "500+", label: "Orders Fulfilled" },
              { val: "50+", label: "Fabric Types" },
              { val: "10+", label: "Years Experience" },
              { val: "100%", label: "Custom Made" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.val}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── PRODUCTS ───────── */}
        <section id="work" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                What We Make
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every garment, perfected. From corporate dress codes to
                stadium-ready sportswear — engineered with precision
                construction and premium fabrics.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "👔",
                  title: "Premium Shirts",
                  desc: "Formal · Casual · Corporate\nOxford Cotton · Twill Weave · Linen Blend",
                },
                {
                  icon: "👕",
                  title: "T-Shirts & Polos",
                  desc: "Screen Print · Embroidery\nCustom Fits · All Sizes",
                },
                {
                  icon: "🏫",
                  title: "School Uniforms",
                  desc: "Bulk · Durable · Branded\nTerm-Ready Delivery",
                },
                {
                  icon: "👖",
                  title: "Trousers & Bottoms",
                  desc: "Chinos · Joggers · Formal\nStretch & Classic Cuts",
                },
                {
                  icon: "✨",
                  title: "Custom Everything",
                  desc: "Your vision, our craft\nFull Design-to-Delivery",
                },
                {
                  icon: "🏃",
                  title: "Sports & Training Kits",
                  desc: "Moisture-Wicking · Team Branding\nFootball · Cricket · Basketball",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── MANUFACTURING / PROTOTYPES ───────── */}
        <section id="prototypes" className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                What We Manufacture
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We don't sell ready-made clothes — we manufacture custom bulk
                garments based on your design, fabric, and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  name: "Custom T-Shirts (All Types)",
                  spec: "Cotton · Oversized · Dry-Fit · Printing Supported",
                  price: "₹199+",
                  image: "/prototypes/tshirt.jpeg",
                  emoji: "👕",
                },
                {
                  id: "02",
                  name: "Custom Shirts",
                  spec: "Formal · Casual · Office Wear · Branding Available",
                  price: "₹399+",
                  image: "/prototypes/shirt.jpeg",
                  emoji: "👔",
                },
                {
                  id: "03",
                  name: "Sports / Team Kits",
                  spec: "Dri-Fit · Jersey Printing · Full Custom Design",
                  price: "₹499+",
                  image: "/prototypes/kit.jpeg",
                  emoji: "🏃",
                },
                {
                  id: "04",
                  name: "School & Uniform Sets",
                  spec: "Full Uniform Manufacturing · Logo · Batch Orders",
                  price: "₹299+",
                  image: "/prototypes/uniform.jpeg",
                  emoji: "🏫",
                },
                {
                  id: "05",
                  name: "Custom Trousers",
                  spec: "Formal · Slim Fit · Stretch Fabric · Bulk Orders",
                  price: "₹499+",
                  image: "/prototypes/trouser.jpeg",
                  emoji: "👖",
                },
                {
                  id: "06",
                  name: "Fully Custom Garments",
                  spec: "You send design → We manufacture from scratch",
                  price: "Quote Based",
                  image: "/prototypes/custom.jpeg",
                  emoji: "✨",
                },
              ].map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition group"
                >
                  {/* Image Container */}
                  <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center text-6xl">
                    ${p.emoji}
                  </div>
                `;
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="text-xs font-medium text-gray-400 mb-1">
                      Manufacturing Category {p.id}
                    </div>
                    <h3 className="font-semibold mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.spec}</p>
                    <div className="mt-3 text-sm font-bold text-green-600">
                      Starting from {p.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <a
                href="#orders"
                className="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                Build Your Custom Order →
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Pricing depends on fabric, design, quantity & customization
                level
              </p>
            </div>
          </div>
        </section>

        {/* ───────── PROCESS ───────── */}
        <section id="process" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                How We Work
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From your idea → to bulk manufacturing → to delivery. Simple
                5-step custom process.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  icon: "💬",
                  title: "Requirement Submission",
                  desc: "Client shares design, quantity, fabric preference, and customization details.",
                },
                {
                  step: "02",
                  icon: "📦",
                  title: "Prototype & Review",
                  desc: "We prepare digital mockup (and sample if needed) for approval.",
                },
                {
                  step: "03",
                  icon: "💰",
                  title: "Quotation & Discussion",
                  desc: "Final pricing is shared based on fabric, design, and bulk quantity.",
                },
                {
                  step: "04",
                  icon: "🧵",
                  title: "Bulk Manufacturing",
                  desc: "Production starts after confirmation with strict quality control.",
                },
                {
                  step: "05",
                  icon: "🚚",
                  title: "Delivery & Completion",
                  desc: "Order is packed and delivered with full support till completion.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative p-6 border border-gray-200 rounded-2xl bg-gray-50 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <div className="text-xs font-bold text-gray-400 mb-1">
                    STEP {p.step}
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── ORDERS / CONTACT ───────── */}
        <section id="orders" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Custom Bulk Orders Made Easy
              </h2>
              <p className="text-gray-300 mb-6">
                Choose a prototype, share your design, quantity, fabric, and
                size. We will contact you directly for pricing and customization
                details.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: "@craftrixgarments",
                    href: "https://instagram.com/craftrixgarments",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Direct Business Chat",
                    href: "https://wa.me/8801XXXXXXXXX",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "orders@craftrix.com",
                    href: "mailto:orders@craftrix.com",
                  },
                  {
                    icon: "📢",
                    label: "Telegram",
                    value: "Instant Order Notifications",
                    href: "#",
                  },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {c.icon}
                    </span>
                    <div>
                      <div className="text-sm text-gray-400">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-sm text-gray-400 mb-3">
                  Payment Methods (After Confirmation)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Credit/Debit Card",
                    "UPI",
                    "Bank Transfer",
                    "Net Banking",
                  ].map((m, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1.5 rounded-lg text-sm text-gray-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * Final pricing is shared after discussion based on quantity &
                  design
                </p>
              </div>
            </div>

            {/* Right: Order Form */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Request a Custom Quote</h3>
              <OrderForm />
              <p className="text-xs text-gray-500 mt-4 text-center">
                We will contact you within 24 hours for pricing & details
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
}
