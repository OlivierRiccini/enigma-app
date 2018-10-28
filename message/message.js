const fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwyz \'-.,;/!?'.split('');

const fecthMessages = () => {
  try {
    var messagesString = fs.readFileSync('messages-data.json');
    return JSON.parse(messagesString);
  } catch (e) {
    return [];
  }
};

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

  let messages = fecthMessages();

  messages.push(newMessageObj);

  fs.writeFileSync('messages-data.json', JSON.stringify(messages));

  return newMessageObj;
};


const messageDecoder = (message) => {
  let messages = fecthMessages();

  const codedMessageObj = messages.filter(obj => obj.codedMessage === message);

  if (codedMessageObj.length > 0) {
    const secretConfig = codedMessageObj[0].secretConfig;
    const codedMessage = codedMessageObj[0].codedMessage;

    const decodedMessage = secretConfig.map((nb) => alphabet[nb]);
    return decodedMessage.join('');
  }
};

module.exports = {
  messageCoder,
  messageDecoder
};
