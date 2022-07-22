<template>
    <div class="loader" :class="getSize()"></div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
    size?: "md" | "sm" | "lg";
}>(), {
    size: "md",

});

function getSize(): string {
    return `loader-${props.size}`;
}
</script>
<style scoped lang="scss">
$background: #ffffff50;
$circle: #ffffff;

.loader {
    border: 0.25rem solid $background;
    border-radius: 50%;
    border-top: 0.25rem solid $circle;
    width: 0.75rem;
    height: 0.75rem;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
}

.loader-sm {
    border: 0.188rem solid $background;
    border-top: 0.188rem solid $circle;
    width: 0.625rem;
    height: 0.625rem;
}

.loader-lg {
    border: 0.313rem solid $background;
    border-top: 0.313rem solid $circle;
    width: 0.938rem;
    height: 0.938rem;
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