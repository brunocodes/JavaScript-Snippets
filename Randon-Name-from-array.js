// Randon Name from array fuction
function generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5); // Nice way to assain random  Numbers  to a arrays index position
    return names[randomNumber]; // array[index position]
  }

/////

const words = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}





//// origin:  codecadamy classes sectiom
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5); // Nice way to assain random  Numbers  toa arrays index position
    return names[randomNumber];
  }
}
// random password
static generatePassword() [
    const randomNumber = Math.floor(Math.random()* 10000);
    return randomNumber;