"use client";
import { useState } from "react";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Submission failed");
      setStatus("success");
      setMessage("✅ Sent! We'll contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Order Received!
        </h3>
        <p className="text-green-700 mb-4">{message}</p>
        <button
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="text-sm text-green-600 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone / WhatsApp / Email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
          placeholder="+91 XXXXX XXXXX or email@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="garmentType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Garment Type
        </label>
        <select
          id="garmentType"
          name="garmentType"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
        >
          <option value="">Select a category...</option>
          <option>Shirts (Formal / Casual)</option>
          <option>T-Shirts / Polo</option>
          <option>Trousers / Bottoms</option>
          <option>School Uniforms</option>
          <option>Sports / Training Kit</option>
          <option>Custom Clothing (Other)</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            placeholder="e.g. 50"
          />
        </div>
        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Deadline (Optional)
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Details / Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
          placeholder="Fabric preference, branding details, sizing notes..."
        ></textarea>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">{message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Send Order Request →"
        )}
      </button>
    </form>
  );
}
