<template>
  <div></div>
  <!-- <figure class="product__card product" v-for="product in products">
    <picture class="product__img-container" :class="{ 'added-to-cart': product.quantity }">
      <source media="(min-width: 64rem)" :srcset="product.image.desktop" type="image/jpeg" />

      <source media="(min-width: 48rem)" :srcset="product.image.tablet" type="image/jpeg" />
      <img :src="product.image.mobile" :alt="product.name" class="product__img" />
    </picture>
    <div class="product__controls">
      <product-quantity
        v-if="product.quantity"
        :prod-id="product.id"
        :prod-quantity="product.quantity"
      ></product-quantity>
      <base-button v-else mode="btn-add-to-cart" @click="addToCart(product.id)">
        <img src="/images/icon-shopping-cart.svg" alt="" />
        <span> add to cart </span>
      </base-button>
    </div>
    <figcaption class="product__details">
      <span class="product__category">{{ product.category }}</span>
      <h2 class="product__name">{{ product.name }}</h2>
      <h3 class="product__price">{{ product.priceDollars }}</h3>
    </figcaption>
  </figure> -->
</template>

<script>
// import ProductQuantity from "./ProductQuantity.vue";

// export default {
//   components: {
//     ProductQuantity,
//   },
//   computed: {
//     products() {
//       return this.$store.getters.formattedProducts;
//     },
//   },

//   methods: {
//     addToCart(id) {
//       this.$store.dispatch("addToCart", id);
//     },
//   },
// };
</script>

<style scoped>
/* .product__controls {
  display: flex;
  justify-content: center;
  margin-top: -2rem;
  position: relative;
  z-index: 4;
}
.product__details {
  display: flex;
  margin-top: var(--space-400);
  flex-direction: column;
  gap: var(--space-100);
}

.product__img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.product__category {
  color: var(--color-rose-500);
}
.product__name {
  color: var(--color-rose-900);
  font-size: 1.6rem;
  font-weight: 600;
}
.product__price {
  color: var(--color-red);
}
.product__quantity-control {
  min-width: 16rem;
  border-radius: var(--radius-lg);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-300);
  font-weight: 600;
}

.product__img-container {
  display: block;
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.added-to-cart {
  border-color: var(--color-red, #c73b0f);
} */
</style>
