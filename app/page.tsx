import OrderForm from "@/components/OrderForm";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight">
            CRAFT<span className="text-gray-500">RIX</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#work" className="hover:text-gray-900">
              Products
            </a>
            <a href="#prototypes" className="hover:text-gray-900">
              Prototypes
            </a>
            <a href="#process" className="hover:text-gray-900">
              Process
            </a>
            <a href="#orders" className="hover:text-gray-900">
              Orders
            </a>
          </nav>
          <a href="#orders" className="btn-primary text-sm px-4 py-2">
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="py-20 md:py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600">
            Premium Garment Manufacturing
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Crafted for <span className="text-gray-400">every occasion.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From precision-tailored uniforms to bold custom streetwear —
            CRAFTRIX delivers premium garments built to your exact
            specification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#orders" className="btn-primary">
              Start Your Order
            </a>
            <a href="#work" className="btn-outline">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "500+", label: "Orders Fulfilled" },
            { val: "50+", label: "Fabric Types" },
            { val: "10+", label: "Years Experience" },
            { val: "100%", label: "Custom Made" },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl font-bold">{stat.val}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Make */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What We Make</h2>
            <p className="text-gray-600">Every garment, perfected.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "👔",
                title: "Premium Shirts",
                desc: "Formal · Casual · Corporate • Oxford, Twill, Linen",
              },
              {
                icon: "👕",
                title: "T-Shirts & Polos",
                desc: "Screen Print • Embroidery • Custom Fits",
              },
              {
                icon: "🏫",
                title: "School Uniforms",
                desc: "Bulk • Durable • Branded • Term-Ready",
              },
              {
                icon: "👖",
                title: "Trousers & Bottoms",
                desc: "Chinos • Joggers • Formal • Stretch",
              },
              {
                icon: "✨",
                title: "Custom Everything",
                desc: "Your vision, our craft • Full customization",
              },
              {
                icon: "🏃",
                title: "Sports & Training",
                desc: "Moisture-Wicking • Team Branding • All Sports",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototypes */}
      <section id="prototypes" className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Prototype Gallery</h2>
            <p className="text-gray-600">
              See before you buy. Every order starts with a prototype — approved
              by you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                name: "Corporate Dress Shirt",
                spec: "Oxford Weave · Sky Blue",
                icon: "👔",
              },
              {
                id: "02",
                name: "Football Team Kit",
                spec: "Dri-Fit · Red & White",
                icon: "🏃",
              },
              {
                id: "03",
                name: "School Uniform Set",
                spec: "Cotton Blend · Navy",
                icon: "🏫",
              },
              {
                id: "04",
                name: "Custom Brand Tee",
                spec: "180gsm · Screen Print",
                icon: "👕",
              },
              {
                id: "05",
                name: "Slim Chino Trouser",
                spec: "Stretch Cotton · Charcoal",
                icon: "👖",
              },
            ].map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="h-40 bg-gray-50 flex items-center justify-center text-6xl">
                  {p.icon}
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium text-gray-400 mb-1">
                    Prototype {p.id}
                  </div>
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.spec}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#orders" className="btn-outline">
              Request a Sample →
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Free digital mockup with every quote
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How We Work</h2>
            <p className="text-gray-600">
              From concept to closet. 5-step process.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                icon: "💬",
                title: "Consultation",
                desc: "Share vision, quantity, fabric, timeline.",
              },
              {
                step: "02",
                icon: "✏️",
                title: "Design & Prototype",
                desc: "Digital mockup + physical sample for approval.",
              },
              {
                step: "03",
                icon: "🧵",
                title: "Fabric Sourcing",
                desc: "Certified suppliers, sports-grade to luxury cotton.",
              },
              {
                step: "04",
                icon: "⚙️",
                title: "Manufacturing & QC",
                desc: "In-house production with QC at every stage.",
              },
              {
                step: "05",
                icon: "🚚",
                title: "Delivery & Support",
                desc: "Fast shipping + 100% satisfaction follow-up.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative p-6 border border-gray-200 rounded-xl bg-white"
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

      {/* Orders / Contact */}
      <section id="orders" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s build together.
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to start? Reach out through any channel below — we respond
              within 24 hours and provide a free, no-obligation quote.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: "📸", label: "Instagram", val: "@craftrixgarments" },
                {
                  icon: "👤",
                  label: "Facebook",
                  val: "Craftrix Garments Enterprises",
                },
                { icon: "💬", label: "WhatsApp", val: "Chat with us directly" },
                { icon: "✉️", label: "Email", val: "orders@craftrix.com" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-sm text-gray-400">{c.label}</div>
                    <div className="font-medium">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <span>💳 bKash</span>
              <span>💰 Nagad</span>
              <span>🏦 Bank Transfer</span>
              <span>💵 Cash</span>
              <span>🌐 PayPal</span>
            </div>
          </div>
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Quick Order Request</h3>
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 text-gray-400 text-sm px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">
              CRAFT<span className="text-gray-500">RIX</span>
            </div>
            <p className="mb-4">
              Manufacturing premium custom-crafted garments with precision and
              passion. Your vision, stitched to perfection.
            </p>
            <div className="flex gap-4 text-lg">
              <a
                href="https://instagram.com/craftrixgarments"
                className="hover:text-white"
              >
                📸
              </a>
              <a
                href="https://facebook.com/craftrixgarments"
                className="hover:text-white"
              >
                👤
              </a>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                className="hover:text-white"
              >
                💬
              </a>
              <a href="mailto:orders@craftrix.com" className="hover:text-white">
                ✉️
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-white">
                  Premium Shirts
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  T-Shirts & Tees
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  Trousers
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  School Uniforms
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  Sports Kits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-white">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#prototypes" className="hover:text-white">
                  Prototypes
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#orders" className="hover:text-white">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Quality Promise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bulk Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} CRAFTRIX Garments Enterprises. All
            rights reserved.
          </p>
          <p className="text-gray-500">
            Crafted with care, stitched with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
