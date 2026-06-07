const { Telegraf, Markup } = require("telegraf");

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN not found!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🚀 Welcome to Premium Store Bot",
    Markup.inlineKeyboard([
      [Markup.button.callback("🛒 Products", "products")],
      [Markup.button.callback("📦 My Orders", "orders")],
      [Markup.button.url("🎧 Support", "https://t.me/webcryptoking")]
    ])
  );
});

bot.action("products", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🛒 Product Catalog");
});

bot.action("orders", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("📦 No orders found.");
});

bot.launch()
  .then(() => console.log("✅ Bot Started"))
  .catch((err) => console.error("❌ Bot Error:", err));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
