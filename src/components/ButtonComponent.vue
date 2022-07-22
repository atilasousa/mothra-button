<template>
    <button @click="onClick()" class="cf-button" :class="getClasses()" :disabled="isDisabled || loading">
        <div class="cf-button-icon">
            <slot name="icon" />
        </div>
        <span v-if="!loading && iconPosition !== 'onlyIcon'" class="cf-button-label">
            <slot name="label" />
        </span>
        <span v-if="!slots.icon && iconPosition === 'onlyIcon'">
            Insira um icone
        </span>
        <LoadingComponent :size="size" v-if="loading" />
    </button>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue';
import LoadingComponent from './LoadingComponent.vue';
const slots = useSlots();

const emit = defineEmits<{
    (e: 'click'): void
}>();

const props = withDefaults(defineProps<{
    backgroundColor?: string;
    size?: "md" | "sm" | "lg";
    isDisabled?: boolean;
    iconPosition?: "right" | "left" | "onlyIcon";
    loading?: boolean;
}>(), {
    backgroundColor: "#2a9d8f",
    size: "md",
    isDisabled: false,
    iconPosition: "left",
    loading: false,
});

const buttonHover: string = props.backgroundColor + 'c2';
const buttonDisabled: string = props.backgroundColor + '71';

function getClasses(): Array<string | object> {
    return [
        `cf-button-${props.size}`,
        {
            'cf-button-icon-right': slots.icon && props.iconPosition === 'right' && slots.label,
            'cf-button-icon-left': slots.icon && props.iconPosition === 'left' && slots.label,
            'cf-button-onlyIcon-loading': slots.icon && props.loading && props.iconPosition === 'onlyIcon'
        },
        { 'loading': props.loading },
    ];
}
function onClick() {
    emit('click');
}

</script>
<style lang="scss">
.cf-button {
    transition: 0.3s;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: white;
    font-weight: 500;
    background-color: v-bind(backgroundColor);
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover {
        background-color: v-bind(buttonHover);
    }

    &:disabled {
        background-color: v-bind(buttonDisabled);
        cursor: auto;
    }
}

.cf-button-icon-left {
    .cf-button-icon {
        margin-right: 0.5rem;
    }
}

.cf-button-icon-right {
    flex-direction: row-reverse;

    .cf-button-icon {
        margin-left: 0.5rem;
    }
}

.cf-button-onlyIcon-loading {
    .cf-button-icon {
        margin-right: 0.5rem;
    }
}

.cf-button-sm {
    padding: 0.45rem 0.7rem;
    font-size: 0.85rem;
    border-radius: 0.4rem;
}

.cf-button-md {
    padding: 0.6rem 1rem;
    font-size: .95rem;
    border-radius: 0.6em;
}

.cf-button-lg {
    padding: 0.7rem 1.2rem;
    font-size: 1.3rem;
    border-radius: 0.7rem;
}
</style>