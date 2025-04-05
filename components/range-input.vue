<script setup lang="ts">
const progress = useProgress()
</script>

<template>
  <div class="flex items-center justify-center text-center gap-5 mt-10">
    <label class="block mb-2 text-md font-medium text-gray-900" for="progress">
      Progress
    </label>
    <input
      v-model="progress"
      class="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      type="range"
      name="progress"
      min="0"
      max="100"
      step="5"
    >
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  height: 1rem;
  width: 1rem;
  background-color: black;
  border-radius: 9999px;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
  background-color: black;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
