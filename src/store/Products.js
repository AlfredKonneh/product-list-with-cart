import { defineStore } from "pinia";
import { ref } from "vue";
import { products } from "@/data/products.js";

export const useProductsStore = defineStore("Products", () => {
  const productsData = ref(products);

  return {
    productsData,
  };
});
