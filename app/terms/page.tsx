import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service | CRAFTRIX" };

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 prose prose-slate prose-headings:font-semibold">
      <h1>Terms of Service</h1>
      <p className="text-gray-500">Last updated: May 2026</p>

      <h2>1. Order Placement & Acceptance</h2>
      <p>
        Submitting an order request does not constitute a binding contract.
        CRAFTRIX will review specifications, availability, and feasibility
        before issuing a formal quote. Production begins only upon
        written/verbal approval and payment deposit.
      </p>

      <h2>2. Pricing & Payment</h2>
      <p>
        Prices are subject to change based on fabric availability, order volume,
        and customization complexity. Accepted payment methods: bKash, Nagad,
        Bank Transfer, Cash, PayPal. A 30–50% advance is required for
        custom/bulk orders.
      </p>

      <h2>3. Prototypes & Revisions</h2>
      <p>
        Digital mockups are provided free. Physical prototypes may incur a
        refundable fee against the final order. Up to 2 minor revisions are
        included. Major design changes after approval may delay timelines and
        incur additional costs.
      </p>

      <h2>4. Production & Delivery</h2>
      <p>
        Estimated delivery dates are provided after order confirmation. Delays
        due to fabric shortages, force majeure, or client-side revisions will be
        communicated promptly. Shipping costs are calculated based on weight and
        destination.
      </p>

      <h2>5. Returns & Quality Guarantee</h2>
      <p>
        Custom garments are non-refundable unless defective. Quality issues must
        be reported within 7 days of delivery. We will repair or replace
        defective items at our discretion.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These terms are governed by the laws of Bangladesh. Disputes will be
        resolved amicably or through local jurisdiction.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions: <a href="mailto:orders@craftrix.com">orders@craftrix.com</a>
      </p>
    </main>
  );
}
