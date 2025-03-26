<script setup lang="ts">
import CrownSvg from './crown-svg.vue';

const progress = ref(0);

const changePercent = () => {
    const tmp = progress.value + 20;
    progress.value = tmp > 100 ? 0 : tmp;
}

</script>

<template>
    <div class="flex flex-col items-center justify-center my-10 gap-5">
        <h1 class="font-bold">Lingo</h1>
        <div class="mx-50">
            <svg-circle :progress trail-color='#e5e7eb' stroke-color='#4ade80' :size="100" :width="10">
                <button type="button"
                    class="inline-flex rounded-full items-center justify-center whitespace-nowrap  text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-600  active:border-b-0 h-[70px] w-[70px] border-b-8 fill-primary-foreground text-primary-foreground"
                    @click="changePercent">
                    <CrownSvg />
                </button>
            </svg-circle>
        </div>
    </div>
</template>