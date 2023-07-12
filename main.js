

// ES2021 intoduced the string method replaceAll().

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

// console.log(text)

// ================================

// lastIndexOf("planet", 20)

// let textLast = "Hello planet earth, you are a great planet.";
// let result = textLast.lastIndexOf("planet");
// let resultLast = textLast.lastIndexOf("Planet");

// console.log(resultLast)













const func = function (){
  console.log('hi')
}

func();




const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'cat'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// Global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

