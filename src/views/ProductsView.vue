<template>
  <section>
    <h1>Desserts</h1>
    <base-grid varient="grid--products">
      <single-product
        v-for="prod in productsData"
        :key="prod.id"
        :product="prod"
        :prod-category="prod.category"
        :prod-id="prod.id"
        :prod-image="prod.image"
        :prod-name="prod.name"
        :prod-price="prod.priceCents"
      ></single-product>
    </base-grid>
  </section>
</template>

<script setup>
import { useProductsStore } from "@/store/Products";
import SingleProduct from "@/components/product/SingleProduct.vue";

const { productsData } = useProductsStore();
</script>

<style scoped>
h1 {
  color: var(--color-rose-900);
  font-size: 4rem;
  text-transform: capitalize;
  margin-bottom: var(--space-600);
}
</style>
