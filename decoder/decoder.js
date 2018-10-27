const alphabet = 'abcdefghijklmnopqrstuvwyz \'-.,;/!?'.split('');

const messageDecoder = (message) => {
  const codedMessageObj = DB.filter(obj => obj.codedMessage === message);

  if (codedMessageObj.length > 0) {
    const secretConfig = codedMessageObj[0].secretConfig;
    const codedMessage = codedMessageObj[0].codedMessage;

    const decodedMessage = secretConfig.map((nb) => alphabet[nb]);
    return decodedMessage.join('');
  }
};

module.exports.messageDecoder = messageDecoder;
