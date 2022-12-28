import { ref, computed } from "vue";
import { defineStore } from "pinia";

const WordLists = [
  "CASA",
  "VASSOURA",
  "AMOR",
  "GENTE",
  "PESSOA",
  "COMPUTADOR",
  "LIVRO",
  "ILHA",
  "MAPA",
  "CACHORRO",
];

export const useMagicWordStore = defineStore("magicWordStore", () => {
  const magicWord = ref("");
  const myIndex = Math.floor(
    Math.random(0, WordLists.length - 1) * WordLists.length
  );
  const letterToGuess = ref("");

  const playMySound = (som) => {
    var audio = document.getElementById(som);
    audio.play();
  };

  magicWord.value = WordLists[myIndex];

  const compare = (vogal) => {
    console.log(typeof letterToGuess.value);
    console.log(typeof vogal);
    console.log("a letra tem que ser " + letterToGuess.value);
    console.log("a letra enviada foi " + vogal);
    if (letterToGuess.value === vogal) {
      playMySound("correct");
    } else {
      playMySound("wrong");
    }
  };

  return { magicWord, myIndex, letterToGuess, compare };
});
