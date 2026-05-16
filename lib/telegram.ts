interface TelegramPayload {
  name: string;
  contact: string;
  garment: string;
  qty: number;
  deadline?: string;
  notes?: string;
}

export async function sendTelegramNotification(data: TelegramPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("⚠️ Telegram credentials missing. Skipping notification.");
    return;
  }

  const message = `📦 *NEW ORDER REQUEST*
👤 *Name:* ${data.name}
📞 *Contact:* ${data.contact}
👕 *Garment:* ${data.garment}
📊 *Quantity:* ${data.qty}
📅 *Deadline:* ${data.deadline || "Flexible"}
📝 *Notes:* ${data.notes || "None"}
⏰ *Received:* ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })}
🔗 *Reply:* /order`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    const result = await res.json();
    if (!result.ok)
      throw new Error(result.description || "Failed to send Telegram message");
  } catch (error) {
    console.error("🚨 Telegram Notification Error:", error);
    // Fallback: log to console or trigger email alert in production
  }
}
