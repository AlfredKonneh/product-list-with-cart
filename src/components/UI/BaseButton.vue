<template>
  <button class="base-btn" :class="btnClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: false,
    default: null,
  },
})

const btnClasses = computed(() => [props.mode, props.size])
</script>

<style scoped>
.base-btn {
  background-color: transparent;
  border-radius: var(--radius-lg);
  border: 1px solid transparent;
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: 600;
  padding: var(--space-250) var(--space-300);
  text-align: center;
  text-transform: capitalize;
  transition: all 0.3s ease-in;
}

.btn-primary {
  background-color: var(--color-red);
  color: var(--color-white);
}

.full {
  width: 100%;
}

.btn-add-to-cart {
  color: var(--color-rose-900);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16rem;
  gap: var(--space-200);
  border: 1px solid var(--color-rose-400);
  background-color: var(--color-white);
}

.btn-add-to-cart:hover {
  color: var(--color-red);
  border-color: var(--color-red);
}

.btn-tiny {
  padding: 0;
}

.btn-tiny:active {
  transform: translateY(3px);
}

.btn-clear,
.btn-undo {
  padding: var(--space-200);
  border-radius: 0;
}

.btn-undo {
  background-color: dodgerblue;
  color: var(--color-white);
}
</style>
