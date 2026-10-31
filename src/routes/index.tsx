import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/stocko-logo.png.asset.json";
import brand1 from "@/assets/brands/brand-b1.png.asset.json";
import brand2 from "@/assets/brands/brand-b2.png.asset.json";
import brand3 from "@/assets/brands/brand-b3.png.asset.json";
import brand4 from "@/assets/brands/brand-b4.png.asset.json";
import brand5 from "@/assets/brands/brand-b5.png.asset.json";
import brand6 from "@/assets/brands/brand-b6.png.asset.json";
import brand7 from "@/assets/brands/brand-b7.png.asset.json";
import brand8 from "@/assets/brands/brand-b8.png.asset.json";
import brand9 from "@/assets/brands/brand-b9.png.asset.json";
import brand10 from "@/assets/brands/brand-b10.png.asset.json";
import brand11 from "@/assets/brands/brand-b11.png.asset.json";

const BRAND_IMAGES = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
];

const CATEGORIES = [
  { name: "Staples", image: "https://images.unsplash.com/photo-1775433205046-86e060feff06?w=800&q=80" },
  { name: "FMCG", image: "https://images.unsplash.com/photo-1739066598279-1297113f5c6a?w=800&q=80" },
  { name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1633536704679-de310869515b?w=800&q=80" },
  { name: "House & Cleaning", image: "https://images.unsplash.com/photo-1623949786120-5cee72ef63f9?w=800&q=80" },
  { name: "General Merchandising", image: "https://images.unsplash.com/photo-1624831466206-5b15053baabb?w=800&q=80" },
  { name: "Personal Care", image: "https://images.unsplash.com/photo-1492552085122-36706c238263?w=800&q=80" },
];

const STEPS = [
  { title: "Visit Our Store", text: "Come to Stocko Wholesale in Kuttiadi — open Monday to Saturday, 8 AM to 6:30 PM." },
  { title: "Browse & Pick", text: "Choose from thousands of products across every category at wholesale prices." },
  { title: "Pay at Counter", text: "Pay for your goods at our checkout — simple, straightforward, no hidden charges." },
  { title: "Walk Out With Your Stock", text: "Carry your goods straight from our store — no waiting needed." },
];

const ABOUT_BOXES = [
  { icon: "🤝", num: "Trusted", label: "By Local Businesses" },
  { icon: "🏪", num: "One Stop", label: "Shop for Everything", highlight: true },
  { icon: "💡", num: "Smart", label: "Buying for Businesses", highlight: true },
  { icon: "🌱", num: "Growing", label: "With Every Business We Serve" },
];

const WHY_CARDS = [
  { icon: "🏆", title: "First of Its Kind in Kerala", text: "A pioneering wholesale concept — bringing a new, smarter way to buy stock to businesses across the state." },
  { icon: "💰", title: "True Wholesale Prices", text: "Buy in bulk and save significantly — the more you buy, the more you save." },
  { icon: "🏠", title: "Walk In & Walk Out", text: "Visit our store in Kuttiadi, browse our shelves, pay, and carry your stock home immediately." },
  { icon: "📦", title: "Thousands of Products", text: "Every category your business needs, all available under one roof at Stocko." },
  { icon: "✅", title: "Quality You Can Trust", text: "Every product on our shelves is sourced from verified suppliers and meets quality standards." },
  { icon: "📅", title: "10+ Years of Experience", text: "Over a decade of serving businesses across Kozhikode with the best wholesale products." },
];

const WHATSAPP_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.84 1.078-.173.145-.64.06-.909-.06-.463-.21-1.486-.66-2.25-1.53-.646-.75-1.092-1.67-1.236-2.01-.144-.34-.015-.63.075-.75.15-.18.36-.42.54-.63.15-.18.225-.3.3-.45.075-.15.03-.345-.03-.495-.06-.15-.675-1.62-.923-2.22-.24-.57-.487-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stocko Wholesale — Kerala's First Wholesale Store of Its Kind" },
      {
        name: "description",
        content:
          "Stocko Wholesale in Kuttiadi, Kozhikode — walk in, pick from thousands of products across every category, and walk out with your stock at the best wholesale prices.",
      },
      {
        property: "og:title",
        content: "Stocko Wholesale — Kerala's First Wholesale Store of Its Kind",
      },
      {
        property: "og:description",
        content:
          "Buy more. Pay less. Save bigger. Kerala's first-of-its-kind wholesale store for businesses, in Kuttiadi, Kozhikode.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    { label: "About", target: "about-section" },
    { label: "How It Works", target: "how-section" },
    { label: "Products", target: "categories-section" },
    { label: "Contact", target: "contact-section" },
  ];
  return (
    <nav className="sw-nav">
      <div className="sw-logo" onClick={() => scrollToSection("about-section")}>
        <img src={logoAsset.url} alt="Stocko Wholesale" />
      </div>
      <ul className="sw-nav-links">
        {links.map((link) => (
          <li key={link.target}>
            <button type="button" onClick={() => scrollToSection(link.target)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="sw-nav-cta"
        onClick={() => scrollToSection("contact-section")}
      >
        Visit Us
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <div className="sw-hero">
      <div className="sw-hero-badge">★ Kerala's First Wholesale Store of Its Kind</div>
      <h1>
        Buy More. Pay Less.
        <br />
        <span>Save Bigger.</span>
      </h1>
      <p>
        Stocko Wholesale brings you an entirely new way to shop for your business — walk in,
        pick from thousands of products, and walk out with your stock at the best wholesale
        prices.
      </p>
      <div className="sw-hero-btns">
        <button
          type="button"
          className="sw-btn-primary"
          onClick={() => scrollToSection("categories-section")}
        >
          Explore Products
        </button>
        <button
          type="button"
          className="sw-btn-outline"
          onClick={() => scrollToSection("how-section")}
        >
          How It Works
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="sw-page">
      <Nav />

      <Hero />

      <div className="sw-first-banner">
        <p>
          🏆 Stocko Wholesale — Kerala's pioneering wholesale store. A first-of-its-kind
          shopping experience for businesses across the state.
        </p>
      </div>

      <div className="sw-stats">
        <div className="sw-stat">
          <div className="sw-stat-num">Kerala's</div>
          <div className="sw-stat-label">First Wholesale Store</div>
        </div>
        <div className="sw-stat">
          <div className="sw-stat-num">10+</div>
          <div className="sw-stat-label">Years of Experience</div>
        </div>
        <div className="sw-stat">
          <div className="sw-stat-num">Walk In</div>
          <div className="sw-stat-label">Pick &amp; Pay Instantly</div>
        </div>
        <div className="sw-stat">
          <div className="sw-stat-num">Best</div>
          <div className="sw-stat-label">Wholesale Prices</div>
        </div>
      </div>

      <section className="sw-section sw-about" id="about-section">
        <div className="sw-about-text">
          <div className="sw-section-tag">Who We Are</div>
          <h2 className="sw-section-title">Kerala's First Store of Its Kind</h2>
          <p className="sw-section-sub">
            Stocko Wholesale is a pioneering wholesale store in Kerala where businesses can
            walk in, browse thousands of products across every category, and carry their
            stock home — all at bulk wholesale prices.
          </p>
          <p style={{ color: "var(--sw-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
            We are a physical store in Kuttiadi — just walk in, pick what your business
            needs, pay, and leave with your goods. Simple as that.
          </p>
        </div>
        <div className="sw-about-visual">
          <div className="sw-about-visual-bg" />
          {ABOUT_BOXES.map((box) => (
            <div
              key={box.label}
              className={`sw-about-stat-box${box.highlight ? " highlight" : ""}`}
            >
              <div className="sw-about-stat-icon">{box.icon}</div>
              <div
                className="sw-about-stat-num"
                style={{
                  color: box.highlight ? "var(--sw-blue)" : undefined,
                  fontSize: box.num === "Growing" ? "1.3rem" : "1.4rem",
                }}
              >
                {box.num}
              </div>
              <div className="sw-about-stat-label">{box.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-section sw-how" id="how-section">
        <div className="sw-section-tag">How It Works</div>
        <h2 className="sw-section-title">Wholesale Made Simple</h2>
        <p className="sw-section-sub">
          Shopping wholesale at Stocko is as easy as walking into a store — because that's
          exactly what it is.
        </p>
        <div className="sw-steps">
          {STEPS.map((step, i) => (
            <div className="sw-step" key={step.title}>
              <div className="sw-step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-section sw-categories" id="categories-section">
        <div className="sw-section-tag">Product Categories</div>
        <h2 className="sw-section-title">Everything for Your Business</h2>
        <p className="sw-section-sub">
          Click on any category to explore all products available at Stocko Wholesale.
        </p>
        <div className="sw-cat-grid">
          {CATEGORIES.map((cat) => (
            <div className="sw-cat-card" key={cat.name}>
              <img src={cat.image} alt={cat.name} />
              <div className="sw-cat-overlay">
                <div className="sw-cat-name">{cat.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-brands-strip" id="brands-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="sw-brands-strip-head">
          <div className="sw-section-tag">Brands We Stock</div>
          <h2>Trusted by the Biggest Names in the Business</h2>
        </div>
        <div className="sw-brands-marquee-wrap">
          <div className="sw-brands-track">
            {[0, 1].map((set) =>
              BRAND_IMAGES.map((asset, i) => (
                <div className="sw-brand-chip" key={`${set}-${i}`}>
                  <img src={asset.url} alt={`Brand logo ${i + 1}`} />
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="sw-section sw-why" id="why-section">
        <div className="sw-section-tag">Why Choose Stocko</div>
        <h2 className="sw-section-title">A Smarter Way to Buy Wholesale</h2>
        <p className="sw-section-sub">
          We're redefining how businesses in Kerala buy their stock.
        </p>
        <div className="sw-why-grid">
          {WHY_CARDS.map((card) => (
            <div className="sw-why-card" key={card.title}>
              <div className="sw-why-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sw-section sw-contact" id="contact-section">
        <div className="sw-contact-inner">
          <div className="sw-contact-info">
            <div className="sw-section-tag" style={{ color: "var(--sw-yellow)" }}>
              Find Us
            </div>
            <h2 className="sw-section-title">Visit Stocko Wholesale</h2>
            <p className="sw-section-sub">
              Come in and experience Kerala's first wholesale store for yourself.
            </p>
            <div className="sw-contact-detail">
              <span>📍</span>
              <span>Vattakkandi Para, Kuttiadi, Kozhikode, Kerala</span>
            </div>
            <div className="sw-contact-detail">
              <span>📞</span>
              <a href="tel:+917034499966">+91 70344 99966</a>
            </div>
            <div className="sw-contact-detail">
              <span>✉️</span>
              <span>stockowholesale@gmail.com</span>
            </div>
            <div className="sw-contact-detail">
              <span>🕓</span>
              <span>Mon–Sat: 8:00 AM – 6:30 PM</span>
            </div>
            <a
              className="sw-whatsapp-btn"
              href="https://wa.me/917034499966?text=Hi%20Stocko%20Wholesale%2C%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="oklch(1 0 0)"
              >
                <path d={WHATSAPP_ICON_PATH} />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <form className="sw-contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="text" name="business" placeholder="Business name" />
            <input type="tel" name="phone" placeholder="Phone number" required />
            <input type="email" name="email" placeholder="Email address" />
            <textarea rows={4} name="message" placeholder="Any questions for us?" />
            <button type="submit" className={sent ? "sent" : undefined}>
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <footer className="sw-footer">
        © 2026 <span>Stocko Wholesale</span>. All rights reserved. &nbsp;|&nbsp; Kerala's
        First Wholesale Store of Its Kind
      </footer>
    </div>
  );
}
