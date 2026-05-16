import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { orderSchema } from "@/lib/validation";
import { encrypt } from "@/lib/encryption";
import { sendTelegramNotification } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = orderSchema.parse(body);

    await connectDB();

    const orderPayload = {
      name: validated.name.trim(),
      contact: validated.contact.trim(),
      contactHash: encrypt(validated.contact), // Store encrypted copy for compliance
      garmentType: validated.garmentType,
      quantity: validated.quantity,
      deadline: validated.deadline,
      notes: validated.notes?.trim() || "",
      createdAt: new Date(),
    };

    const savedOrder = await Order.create(orderPayload);

    // 🔔 Async notification (non-blocking)
    sendTelegramNotification({
      name: validated.name,
      contact: validated.contact,
      garment: validated.garmentType,
      qty: validated.quantity,
      deadline: validated.deadline,
      notes: validated.notes,
    }).catch((err) => console.error("Telegram notification failed:", err));

    return NextResponse.json(
      { success: true, id: savedOrder._id },
      { status: 201 },
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 },
      );
    }
    console.error("Order API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
