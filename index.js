const { Telegraf, Markup } = require("telegraf");

// Debug
console.log("Node Version:", process.version);
console.log("BOT_TOKEN Status:", process.env.BOT_TOKEN ? "FOUND" : "MISSING");

if (!process.env.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN not found!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      `🚀 Welcome to Premium Store Bot

✨ Fast & Professional Experience

Choose an option below:`,
      Markup.inlineKeyboard([
        [Markup.button.callback("🛒 Products", "products")],
        [Markup.button.callback("📦 My Orders", "orders")],
        [Markup.button.url("🎧 Support", "https://t.me/webcryptoking")],
        [Markup.button.callback("ℹ️ Help", "help")]
      ])
    );
  } catch (err) {
    console.error(err);
  }
});

bot.action("products", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText(
    `🛒 Available Products

⭐ SHEIN SOA Coupon
⭐ Flipkart Coupon
⭐ Play Store Redeem Code`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Back", callback_data: "home" }]
        ]
      }
    }
  );
});

bot.action("orders", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText(
    `📦 My Orders

No orders found.`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Back", callback_data: "home" }]
        ]
      }
    }
  );
});

bot.action("help", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText(
    `ℹ️ Help Center

Support: @webcryptoking`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Back", callback_data: "home" }]
        ]
      }
    }
  );
});

bot.action("home", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText(
    `🚀 Welcome to Premium Store Bot`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Products", callback_data: "products" }],
          [{ text: "📦 My Orders", callback_data: "orders" }],
          [{ text: "🎧 Support", url: "https://t.me/webcryptoking" }],
          [{ text: "ℹ️ Help", callback_data: "help" }]
        ]
      }
    }
  );
});

bot.launch()
  .then(() => {
    console.log("✅ Bot Started Successfully");
  })
  .catch((err) => {
    console.error("❌ Launch Error:", err);
  });

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
