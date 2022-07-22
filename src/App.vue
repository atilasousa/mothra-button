<script setup lang="ts">
import BaseButton from './components/ButtonComponent.vue'

</script>

<template>
  <div class="container">
    <h4>Small</h4>
    <base-button size="sm" :is-disabled="true" icon-position="left">
      <template #label>
        Medium
      </template>
      <template #icon>
        <font-awesome-icon icon="user-secret" />
      </template>
    </base-button>
    <h4>Medium</h4>
    <base-button size="md">
      <template #label>
        Medium
      </template>
    </base-button>
    <h4>Large</h4>
    <base-button size="lg">
      <template #label>
        Large
      </template>
    </base-button>
    <h4>Only Icon</h4>
    <base-button icon-position="onlyIcon" :loading="true">
      <template #icon>
        <font-awesome-icon icon="user-secret" />
      </template>
    </base-button>
  </div>

</template>

<style scoped>
.container {
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
