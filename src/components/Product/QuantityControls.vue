<template>
  <div class="quantity-container">
    <base-button mode="btn-tiny" @click="$emit('update-quantity', prodId, 'decrement')">
      <incon-manus />
    </base-button>

    <span>{{ prodQuantity }}</span>

    <base-button mode="btn-tiny" @click="$emit('update-quantity', prodId, 'increment')">
      <icon-plus />
    </base-button>
  </div>
</template>

<script setup>
import IconPlus from "../icons/IconPlus.vue";
import InconManus from "../icons/InconManus.vue";

defineProps({
  prodId: Number,
  prodQuantity: Number,
});

defineEmits(["update-quantity"]);
</script>

<style scoped>
.quantity-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-red);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  min-width: 16rem;
  max-width: 16rem;
  padding: var(--space-250) var(--space-300);
  font-weight: 600;
}
</style>
