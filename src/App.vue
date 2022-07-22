<script setup lang="ts">
import BaseButton from './components/ButtonComponent.vue';
</script>

<template>
  <div class="container">
    <div class="button-demonstration">
      <h4>Small</h4>
      <base-button size="sm" background-color="#9d2a2a">
        <template #label>
          Medium
        </template>
      </base-button>
    </div>
    <div class="button-demonstration">
      <h4>Medium</h4>
      <base-button size="md">
        <template #label>
          Medium
        </template>
      </base-button>
    </div>
    <div class="button-demonstration">
      <h4>Large</h4>
      <base-button size="lg">
        <template #label>
          Large
        </template>
      </base-button>
    </div>
    <div class="button-demonstration">
      <h4>Icon and label</h4>
      <base-button>
        <template #label>
          Label
        </template>
        <template #icon>
          <font-awesome-icon icon="user-secret" />
        </template>
      </base-button>
    </div>

    <div class="button-demonstration">
      <h4>Icon on the right side</h4>
      <base-button icon-position="right">
        <template #label>
          Label
        </template>
        <template #icon>
          <font-awesome-icon icon="user-secret" />
        </template>
      </base-button>
    </div>
    <div class="button-demonstration">
      <h4>Disabled Button</h4>
      <base-button :is-disabled="true">
        <template #label>
          Label
        </template>
      </base-button>
    </div>
    <div class="button-demonstration">
      <h4>Only Icon</h4>
      <base-button icon-position="onlyIcon">
        <template #icon>
          <font-awesome-icon icon="user-secret" />
        </template>
      </base-button>
    </div>
  </div>

</template>

<style scoped lang="scss">
.container {
  padding-top: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .button-demonstration {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
