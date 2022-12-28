<template>
  <div
    class="transition ease-in-out bg-white h-[150px] w-[100px] rounded shadow-md flex justify-center items-center hover:-translate-y-1 hover:scale-110 hover:bg-cyan-200 duration-300 cursor-pointer"
    @click="nameTecla()"
  >
    <span class="text-[4rem]">{{ letter }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMagicWordStore } from "../stores/magicWord";
const magicWord = useMagicWordStore();

const vogal = defineProps(["letter"]);

const nameTecla = () => {
  magicWord.compare(vogal.letter);
};
</script>

<style scoped></style>
