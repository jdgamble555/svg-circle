<script setup lang="ts">

const progress = useProgress()

</script>

<template>
  <div class="flex items-center justify-center text-center mt-10">
    <svg-circle>
      <h1 class="text-3xl font-bold size-full flex items-center justify-center">
        {{ progress }}%
      </h1>
    </svg-circle>
  </div>
  <range-input />
</template>
