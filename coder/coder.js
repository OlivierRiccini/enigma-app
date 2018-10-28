const fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwyz \'-.,;/!?'.split('');

const messageCoder = (message) => {
  const parsedMessage = message.toLowerCase()
                               .split('');

  let secretConfig = [];

  const codedMessage = parsedMessage.map((letter) => {
    let i = Math.floor(Math.random() * 33);
    secretConfig.push(alphabet.indexOf(letter));
    return alphabet[i];
  });

  const newMessageObj = {
    codedMessage: codedMessage.join(''),
    secretConfig
  };

  let messages = [];

  try {
    var messagesString = fs.readFileSync('messages-data.json');
    messages = JSON.parse(messagesString);
  } catch (e) {
    messages = [];
  }

  messages.push(newMessageObj);

  fs.writeFileSync('messages-data.json', JSON.stringify(messages));

  return newMessageObj;
};

module.exports.messageCoder = messageCoder;
