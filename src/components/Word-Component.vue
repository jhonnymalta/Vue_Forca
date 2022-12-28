<template>
  <div v-for="item in wordToGuees" :key="item.id" class="mx-4">
    <LetterComponentVue @AlterSelected="myIndex(item)" :letter="item" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMagicWordStore } from "../stores/magicWord";

import LetterComponentVue from "./Letter-Component.vue";
const magicWord = useMagicWordStore();

const myIndex = (item) => {
  magicWord.letterToGuess = item;
};

const props = defineProps(["desafio"]);
const wordToGuees = props.desafio.split("");
console.log(wordToGuees);
</script>

<style scoped></style>
