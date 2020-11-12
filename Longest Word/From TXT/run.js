var fs = require("fs");
var words = fs.readFileSync("wordlist.txt").toString();
words = words.split("\n");

var badLetters = /[.]/;
var longestAcceptableWord = "";

for(var testWord of words) {

	if(testWord.length <= longestAcceptableWord.length) {
		continue;
 	}

	if(testWord.match(badLetters)) {	continue;	}

	longestAcceptableWord = testWord;

}

console.log('');
console.log('');
console.log('The longest acceptable word is:');
console.log(longestAcceptableWord);
console.log('');
console.log('The amount of words counted is:');
console.log(words.length);