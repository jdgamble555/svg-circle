<script setup lang="ts">

const CHARACTER_LIMIT = 280;

const content = ref('');

const progress = computed(() => ((content.value.length / CHARACTER_LIMIT) * 100) | 0);

const display_characters = computed(() => CHARACTER_LIMIT - content.value.length);

</script>

<template>
    <div class="mx-10 mt-10">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" v-model="content" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write here to see counter...." />
        <div class="flex items-center mt-5 gap-5">
            <svg-circle :progress :width="5" :size="50" stroke-color="#1d4ed8" trail-color="#9ca3af">
                {{ display_characters }}
            </svg-circle>
            <p>Characters Left</p>
        </div>
    </div>
</template>
