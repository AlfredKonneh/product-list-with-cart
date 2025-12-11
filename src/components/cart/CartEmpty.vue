<template>
  <div class="cart-empty-state">
    <IconCartEmpty />
    <p>Your added items will appear here</p>
  </div>
</template>

<script setup>
import IconCartEmpty from "../icons/IconCartEmpty.vue";
</script>

<style scoped>
.cart-empty-state {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s ease;
  width: 100%;
}

p {
  color: var(--color-rose-500);
  font-weight: 600;
}
</style>
