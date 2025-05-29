import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.net'];
  
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++){
      for (let n = 0; n < noun.length; n++){
        for (let e = 0; e < end.length; e++){
          let result = pronoun[p] + adj[a] + noun[n] + end[e];
          console.log(result);
          document.getElementById("output").innerHTML += result + "<br>"
        }
      }
    }
  }
  
};
