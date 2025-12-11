<template>
  <header>
    <h2>Your cart ({{ itemCount }})</h2>
  </header>
</template>

<script setup>
defineProps({ itemCount: Number });
</script>

<style scoped>
header {
  color: var(--color-red);
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-200);
}
</style>
