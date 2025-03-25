<script setup lang="ts">

const progress = useProgress()

const cir = 150
const width = 8
const trailColor = 'gray'
const strokeColor = 'black'

const halfCir = cir / 2
const radius = halfCir - width / 2
const circumference = 2 * Math.PI * radius

const dashOffset = computed(() => circumference * (1 - progress / 100))
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="cir" :height="cir">
        <circle :cx="halfCir" :cy="halfCir" :r="radius" :stroke="trailColor" fill="none" :stroke-width="width" />
        <circle :cx="halfCir" :cy="halfCir" :r="radius" fill="none" :stroke="strokeColor"
            :transform="`rotate(-90 ${halfCir} ${halfCir})`" :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset" :stroke-width="width" />
        <foreignObject :x="width / 2" :y="width / 2 - 4" :width="cir - width" :height="cir - width"
            class="size-full flex justify-center items-center">
            <slot />
        </foreignObject>
    </svg>
</template>
