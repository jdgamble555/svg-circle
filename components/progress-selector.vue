<script setup lang="ts">
const progress = useProgress();
</script>

<template>
  <div class="flex items-center justify-center text-center mt-10">
    <svg-circle :progress>
      <h1 class="text-2xl font-bold">{{ progress }}%</h1>
    </svg-circle>
  </div>
  <range-input />
</template>
