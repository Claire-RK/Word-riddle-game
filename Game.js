// List of Riddles 
const riddles=[

 {

            word: "cutlery",

            hint: "People buy me to eat, but never eat me. What am I?"

        },

        {

            word: "candle",

            hint: "I’m tall when I’m young, and I’m short when I’m old. What am I?"

        },

        {

            word: "parrot",

            hint: "What’s green, but not a leaf, and mimics others, but is not a monkey?"

        },

        {

            word: "sponge",

            hint: "What is full of holes but can still hold water?"

        },

        {

            word: " barber",

            hint: "I shave every day, but my beard stays the same. Who am I?"

        },

        {

            word: "coffin",

            hint: "The man who invented it doesn’t need it. The man who bought it doesn’t want it. The man who needs it doesn’t know. What is it?"

        },

        {

            word: "temper",

            hint: "The shorter I am, the bigger I am. What am I?"

        },

        {

            word: "feather",

            hint: "This is easy to lift but hard to throw. What is it?"

        },

        {

            word: "castle",

            hint: "Halo of water, tongue of wood, walls of stone, long as I stood. What am I?"

        },

        {

            word: "secret",

            hint: "If you have me, you will want to share me. If you share me, you will no longer have me. What am I?"

        },

        {

            word: "lawsuit",

            hint: "What is it that no one wants, but no one wants to lose?"

        }

       
	]
const input2 = document.querySelector(".input2"),
 inputs= document.querySelector(".inputs"),
numOfChances = document.querySelector(".chances"),
wrongLetters=document.querySelector(".wrongletters");

let  maxGuesses, correctLetters = [];

// Function to Randomise Riddles & Display Them
function randomRiddle(){
	let randomRiddle=riddles[Math.floor(Math.random()*riddles.length)];
	word= randomRiddle.word;
	maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = [];
	console.log(word);
	RiddleQuestion.innerText = randomRiddle.hint;
	numOfChances.innerText = maxGuesses;
	
	// Input for answers of Riddles 
	let inputAnswer= "";
for(let i=0;i < word.length;i++){
	inputAnswer += `<input type="text" >`;
	input2.innerHTML = inputAnswer;
}
	
 
 

}


randomRiddle();
// Checking if the answers are correct
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/)  && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    input2.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
			for(let i=1;i > 0;i--){
			maxGuesses--;
            if(maxGuesses===0){
					inputs.setAttribute("disabled",true);
				}
			numOfChances.textContent = maxGuesses;
				
			}
            
        }
       
    }
    inputs.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
			gameWon=document.querySelector(".Won");
			gameWon.textContent = "You Won";
            return randomRiddle();
        } else if(maxGuesses < 1) {
			gameOver=document.querySelector(".Lost");
			gameOver.textContent = "You Lost";
            
            for(let i = 0; i < word.length; i++) {
              input2.querySelectorAll("input")[i].value=word[i];
            }
        }
    }, 100);
}
let next= document.getElementById("nextRiddle");
inputs.addEventListener("input", initGame);
input2.addEventListener("click", () => inputs.focus());
document.addEventListener("keydown", () => inputs.focus());






