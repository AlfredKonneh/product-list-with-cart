<template>
  <base-modal :show-dialog="show">
    <template #content>
      <header>
        <img src="/images/icon-order-confirmed.svg" alt="" />
        <h3 class="heading">Order Confirmed</h3>
        <p class="order__message">We hope you enjoy your food!</p>
      </header>
      <div class="order-items">
        <cart-items-list is-order></cart-items-list>
      </div>
    </template>

    <base-button mode="btn-primary" size="full" @click="$emit('new-order')"
      >Start New Order</base-button
    >
  </base-modal>
</template>

<script setup>
import CartItemsList from '../cart/CartItemsList.vue'
defineEmits(['new-order'])
defineProps({ show: Boolean })
</script>

<style scoped>
header {
  margin-bottom: var(--space-500);
}

.heading {
  font-size: 4rem;
  color: var(--color-rose-900);
  margin-top: var(--space-300);
  margin-bottom: var(--space-200);
}

.order__message {
  color: var(--color-rose-500);
  font-size: 1.6rem;
}

.order-items {
  background-color: var(--color-rose-50);
}
</style>
