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

  return {
    codedMessage: codedMessage.join(''),
    secretConfig
  }
};

module.exports.messageCoder = messageCoder;
