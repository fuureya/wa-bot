const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});



client.initialize();


client.on('message_create', message => {
    if (message.body === '!ping') {
        // reply back "pong" directly to the message
        message.reply('apa jancuk aowkoakowkaw!!!!!!!!!!!!!');
    }
});
