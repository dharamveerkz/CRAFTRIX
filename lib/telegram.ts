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

  const message = `
<b>📦 NEW ORDER REQUEST</b>

<b>👤 Name:</b> ${data.name}
<b>📞 Contact:</b> ${data.contact}
<b>👕 Garment:</b> ${data.garment}
<b>📊 Quantity:</b> ${data.qty}
<b>📅 Deadline:</b> ${data.deadline || "Flexible"}
<b>📝 Notes:</b> ${data.notes || "None"}
<b>⏰ Received:</b> ${new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  })}
<b>🔗 Reply:</b> /order
`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const text = await res.text();

    console.log("📨 Telegram Response:", text);

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Invalid Telegram JSON response");
    }

    if (!result.ok) {
      throw new Error(result.description || "Failed to send Telegram message");
    }

    console.log("✅ Telegram notification sent successfully");
  } catch (error) {
    console.error("🚨 Telegram Notification Error:", error);
  }
}
