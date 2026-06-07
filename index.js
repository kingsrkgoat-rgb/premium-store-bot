const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    '🚀 Welcome!',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🛒 Products', callback_data: 'products' }],
          [{ text: '📦 My Orders', callback_data: 'orders' }],
          [{ text: '🎧 Support', url: 'https://t.me/webcryptoking' }]
        ]
      }
    }
  );
});

bot.launch();
console.log("Bot Started");
