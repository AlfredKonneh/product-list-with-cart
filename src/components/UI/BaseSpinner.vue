<template>
  <span>
    <IconSpinner class="spinner"></IconSpinner>
  </span>
</template>

<script setup>
import IconSpinner from "../icons/IconSpinner.vue";
</script>

<style scoped>
.spinner {
  fill: var(--color-red);
  animation: loader 1s linear infinite;
  margin-inline: auto;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
