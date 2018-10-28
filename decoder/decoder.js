const fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwyz \'-.,;/!?'.split('');

const messageDecoder = (message) => {
  let messages = [];

  try {
    var messagesString = fs.readFileSync('messages-data.json');
    messages = JSON.parse(messagesString);
  } catch (e) {
    messages = [];
  }

  const codedMessageObj = messages.filter(obj => obj.codedMessage === message);

  if (codedMessageObj.length > 0) {
    const secretConfig = codedMessageObj[0].secretConfig;
    const codedMessage = codedMessageObj[0].codedMessage;

    const decodedMessage = secretConfig.map((nb) => alphabet[nb]);
    return decodedMessage.join('');
  }
};

module.exports.messageDecoder = messageDecoder;
