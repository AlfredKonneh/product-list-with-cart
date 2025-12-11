<template>
  <section>
    <h1>Desserts</h1>
    <base-grid varient="grid--products">
      <product-card></product-card>
    </base-grid>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
h1 {
  color: var(--color-rose-900);
  font-size: 4rem;
  text-transform: capitalize;
  margin-bottom: var(--space-600);
}
</style>
