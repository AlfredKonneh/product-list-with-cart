<template>
  <main>
    <base-grid varient="grid--main">
      <products-view></products-view>
      <cart-view></cart-view>
    </base-grid>
  </main>
</template>

<script setup>
import ProductsView from "./views/ProductsView.vue";
import CartView from "./views/CartView.vue";
</script>
