<template>
    <div class="loader" :class="getSize()"></div>
</template>
<script setup lang="ts">

const props = withDefaults(defineProps<{
    size?: "md" | "sm" | "lg";
}>(), {
    size: "md",

})

function getSize(): string {
    return `loader-${props.size}`
}
</script>
<style scoped lang="scss">
$background: #ffffff50;
$circle: #ffffff;

.loader {
    border: 4px solid $background;
    border-radius: 50%;
    border-top: 4px solid $circle;
    width: 12px;
    height: 12px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
}

.loader-sm {
    border: 3px solid $background;
    border-top: 3px solid $circle;
    width: 10px;
    height: 10px;
}

.loader-lg {
    border: 5px solid $background;
    border-top: 5px solid $circle;
    width: 15px;
    height: 15px;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>