const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const SUPPORT = "https://t.me/webcryptoking";

bot.start((ctx) => {
  ctx.replyWithMarkdown(
`🚀 *Welcome to Premium Store Bot*

✨ Fast & Professional Experience

Choose an option below:`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🛒 Products", "products")],
      [Markup.button.callback("📦 My Orders", "orders")],
      [Markup.button.url("🎧 Support", SUPPORT)],
      [Markup.button.callback("ℹ️ Help", "help")]
    ])
  );
});

bot.action("products", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🛒 *Available Products*

⭐ SHEIN SOA Coupon
⭐ Flipkart Coupon
⭐ Play Store Redeem Code

Contact support for more details.`,
{
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "⬅️ Back", callback_data: "home" }]
    ]
  }
});
});

bot.action("orders", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📦 *My Orders*

No orders found.

Order tracking can be added later.`,
{
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "⬅️ Back", callback_data: "home" }]
    ]
  }
});
});

bot.action("help", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`ℹ️ *Help Center*

Use the buttons to navigate.

Support:
@webcryptoking`,
{
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "⬅️ Back", callback_data: "home" }]
    ]
  }
});
});

bot.action("home", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🚀 *Welcome to Premium Store Bot*

Choose an option below:`,
{
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🛒 Products", callback_data: "products" }],
      [{ text: "📦 My Orders", callback_data: "orders" }],
      [{ text: "🎧 Support", url: SUPPORT }],
      [{ text: "ℹ️ Help", callback_data: "help" }]
    ]
  }
});
});

bot.launch();
console.log("✅ Premium Store Bot Started");
