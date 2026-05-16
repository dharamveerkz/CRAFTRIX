import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { orderSchema } from "@/lib/validation";
import { encrypt } from "@/lib/encryption";
import { sendTelegramNotification } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    // 🔍 DEBUG: Log environment variables at runtime (Vercel-specific)
    console.log("🔐 ENV CHECK:", {
      MONGODB_URI: process.env.MONGODB_URI ? "✅ SET" : "❌ MISSING",
      ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
        ? `✅ SET (${process.env.ENCRYPTION_KEY.length} chars)`
        : "❌ MISSING",
      TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN
        ? "✅ SET"
        : "❌ MISSING",
      TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
        ? `✅ SET (value: ${process.env.TELEGRAM_CHAT_ID})`
        : "❌ MISSING",
    });

    const body = await req.json();
    console.log("📥 Request body:", {
      name: body.name,
      contact: body.contact,
      garmentType: body.garmentType,
    });

    const validated = orderSchema.parse(body);

    console.log("🔌 Connecting to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB connected");

    const orderPayload = {
      name: validated.name.trim(),
      contact: validated.contact.trim(),
      contactHash: encrypt(validated.contact),
      garmentType: validated.garmentType,
      quantity: validated.quantity,
      deadline: validated.deadline || null,
      notes: validated.notes?.trim() || "",
      createdAt: new Date(),
    };

    const savedOrder = await Order.create(orderPayload);
    console.log("✅ Order saved to DB:", savedOrder._id);

    // 🔔 Telegram notification (with inline error logging)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      console.log("📤 Sending Telegram notification...");
      sendTelegramNotification({
        name: validated.name,
        contact: validated.contact,
        garment: validated.garmentType,
        qty: validated.quantity,
        deadline: validated.deadline,
        notes: validated.notes,
      })
        .then(() => console.log("✅ Telegram notification sent"))
        .catch((err) => console.error("⚠️ Telegram failed:", err.message));
    } else {
      console.warn("⚠️ Skipping Telegram: credentials missing");
    }

    return NextResponse.json(
      { success: true, id: savedOrder._id, message: "Order received" },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("🚨 Order API Error:", {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });

    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
