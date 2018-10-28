const yargs = require('yargs');

const messageController = require('./message/message');

const messageOptions = {
  demand: true,
  alias: 'm',
  describe: 'Message to code',
  string: true
};

const argv = yargs
  .command('code', 'Code message', {
    message: messageOptions
  })
  .command('decode', 'Decode message', {
    message: messageOptions
  })
  .help()
  .alias('help', 'h')
  .argv;

const command = argv._[0];
const message = argv.message;

if (command === 'code') {
  const codedMessage = messageController.messageCoder(message);
  console.log('Your message has been crypted like this:');
  console.log(codedMessage.codedMessage);
} else if (command === 'decode') {
  const decodedMessage = messageController.messageDecoder(message);
  if (decodedMessage) {
    console.log('Your message has been decoded succesfully!');
    console.log(decodedMessage);
  } else {
    console.log('Message not found');
  }
} else {
  console.log('Command not found');
  console.log("Type 'code -m 'YOUR_MESSAGE'' to code a message");
  console.log("Type 'decode -m 'YOUR_MESSAGE'' to decode a message");
}
