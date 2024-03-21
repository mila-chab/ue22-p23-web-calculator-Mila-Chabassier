// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

//Projet de mila chabassier

const display = document.getElementById("calculator__display");

console.log("Hello world!");

function reponse_cliquee(nb){
  if (display.textContent == '0'){
      display.textContent = nb.textContent
  }  
}

function supprimer(){
  display.value = "0"
}

