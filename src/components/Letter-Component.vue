<template>
  <div
    class="border-b-4 border-stone-600 min-w-[90px] min-h-[150px] hover:cursor-pointe flex justify-center items-center"
    :class="
      ativa
        ? 'letterSelect animate__animated animate__shakeY'
        : 'letterNonSelected'
    "
    @click="$emit('AlterSelected', letter)"
  >
    <span v-if="ativa" class="text-4xl">{{ letter }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["letter"]);

const ativa = ref(true);
const animate = ref(false);
</script>

<style scoped>
.letterSelect {
  background-color: rgba(255, 225, 255, 0.8);
  box-shadow: 0rem -0.1rem 0.5rem 0.25rem rgba(21, 255, 185, 0.8);
}
.letterNonSelected {
  background-color: rgba(255, 225, 255, 0.2);
}
</style>
