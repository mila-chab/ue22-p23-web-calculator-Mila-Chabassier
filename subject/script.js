// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

//Projet de mila chabassier

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   // Do something
 }
})


const key = e.target
const action = key.dataset.action

if (!action) {
    console.log('number key!')
  }