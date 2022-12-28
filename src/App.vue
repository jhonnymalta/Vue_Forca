<template>
  <div class="w-full h-screen">
    <div class="min-h-[50%]">
      <div class="min-h-[80px]">menu</div>
      <div class="min-h-[200px] flex justify-center items-center">
        <WordComponentVue :desafio="choosedWord" />
      </div>
    </div>
    <div class="max-h-[50%]">
      <div class="container mx-auto">
        <div>
          <audio hidden="true" ref="audio" id="wrong">
            <source src="./assets/wrong.mp3" type="audio/mp3" />
          </audio>
          <audio hidden="true" ref="audio" id="correct">
            <source src="./assets/correct.wav" type="audio/wav" />
          </audio>
        </div>
        <TecladoComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMagicWordStore } from "../src/stores/magicWord";

import TecladoComponent from "./components/Teclado-Component.vue";
import WordComponentVue from "./components/Word-Component.vue";

const magicWord = useMagicWordStore();

const choosedWord = ref("");
choosedWord.value = magicWord.magicWord;
console.log(choosedWord);
//let myIndex = Range(0, WordLists.length() - 1);

//console.log(myIndex);
</script>

<style></style>
