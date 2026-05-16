import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | CRAFTRIX" };

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 prose prose-slate prose-headings:font-semibold">
      <h1>Privacy Policy</h1>
      <p className="text-gray-500">Last updated: May 2026</p>

      <h2>1. Data Collection</h2>
      <p>
        We collect only necessary order information: name, contact details
        (phone/email), garment preferences, quantities, and delivery deadlines.
        No tracking cookies or third-party analytics are used without explicit
        consent.
      </p>

      <h2>2. How We Use Your Data</h2>
      <p>
        Your information is used strictly for order fulfillment, prototype
        approval, production scheduling, and post-delivery support. We do not
        sell, rent, or share your data with third parties.
      </p>

      <h2>3. Encryption & Security</h2>
      <p>
        All data is transmitted over HTTPS. Sensitive contact fields are
        encrypted at rest using AES-256. Our database (MongoDB Atlas) is
        encrypted by default and access-controlled via IP whitelisting and
        role-based authentication.
      </p>

      <h2>4. Data Retention & Deletion</h2>
      <p>
        Order records are retained for 24 months for warranty and fulfillment
        purposes. You may request immediate deletion at any time via{" "}
        <a href="mailto:privacy@craftrix.com">privacy@craftrix.com</a>.
      </p>

      <h2>5. Your Rights (GDPR/CCPA)</h2>
      <ul>
        <li>Access, correct, or export your personal data</li>
        <li>Request immediate deletion</li>
        <li>Opt-out of promotional communications</li>
      </ul>

      <h2>6. Contact</h2>
      <p>
        For privacy inquiries, email{" "}
        <a href="mailto:privacy@craftrix.com">privacy@craftrix.com</a>.
      </p>
    </main>
  );
}
