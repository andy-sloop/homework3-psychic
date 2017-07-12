var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var randomNumber = Math.floor(Math.random() * alphabet.length);
var randomLetter = alphabet[randomNumber];
var correctGuesses = 0;
var wrongGuesses = 0;
document.onkeyup =function(event){
console.log(event.key);
if(event.key == randomLetter){
	correctGuesses++
}else{
	wrongGuesses++
}

console.log(randomLetter);
console.log(wrongGuesses);
console.log(correctGuesses);}