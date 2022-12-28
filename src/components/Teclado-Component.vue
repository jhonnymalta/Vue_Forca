<template>
  <div class="grid grid-cols-10 gap-2 mx-20">
    <TeclasComponentVue
      v-for="index in alphabetArray"
      :key="index"
      :letter="index"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TeclasComponentVue from "./Teclas-Component.vue";

const alphabetArray = ref([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]);
</script>

<style scoped></style>
