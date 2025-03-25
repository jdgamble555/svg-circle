<script setup lang="ts">

const progress = useProgress()

const {
    size = 150,
    width = 20,
    trailColor = 'gray',
    strokeColor = 'black'
} = defineProps<{
    size?: number;
    width?: number;
    trailColor?: string;
    strokeColor?: string;
}>()

const cy = size / 2
const r = cy - width / 2
const circumference = 2 * Math.PI * r

const dashOffset = computed(() => circumference * (1 - progress.value / 100))
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
        <circle :cx="cy" :cy :r :stroke="trailColor" fill="none" :stroke-width="width" />
        <circle :cx="cy" :cy :r fill="none" :stroke="strokeColor" :transform="`rotate(-90 ${cy} ${cy})`"
            :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset" :stroke-width="width" />
        <foreignObject :x="0" :y="0" :width="size" :height="size" class="size-full flex justify-center items-center">
            <slot />
        </foreignObject>
    </svg>
</template>
