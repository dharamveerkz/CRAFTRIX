import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    contactHash: { type: String, required: true }, // Encrypted PII for GDPR/CCPA
    garmentType: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    deadline: { type: String, default: null },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: [
        "pending",
        "contacted",
        "in_production",
        "shipped",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true },
);

// Index for faster admin lookups
OrderSchema.index({ createdAt: -1 });
OrderSchema.index({ status: 1 });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
