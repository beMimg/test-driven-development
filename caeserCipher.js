function caeserCipher(word, factor) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encryptedWord = '';
  if (factor < 0) {
    return null;
  }
  if (!factor) {
    fator = 0;
  }
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (alphabet.includes(letter)) {
      let currentIndex = alphabet.indexOf(letter);
      let newIndex = (currentIndex + factor) % 26;
      encryptedWord += alphabet[newIndex];
    }
  }
  return encryptedWord;
}

module.exports = caeserCipher;
