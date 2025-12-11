<template>
  <figure class="product__card product">
    <picture class="product__img-container" :class="{ 'added-to-cart': isInCart }">
      <source media="(min-width: 64rem)" :srcset="prodImage.desktop" type="image/jpeg" />
      <source media="(min-width: 48rem)" :srcset="prodImage.tablet" type="image/jpeg" />
      <img :src="prodImage.mobile" :alt="prodName" class="product__img" />
    </picture>

    <div class="product__action">
      <Transition name="fade-pop" mode="out-in">
        <component
          :is="isInCart ? QuantityControls : AddButton"
          :prod-id="prodId"
          :prod-quantity="quantity"
          @add-item="handleAdd"
          @update-quantity="updateQuantity"
          :key="isInCart"
        />
      </Transition>
    </div>

    <figcaption class="product__details">
      <span class="product__category">{{ prodCategory }}</span>
      <h2 class="product__name">{{ prodName }}</h2>
      <h3 class="product__price">{{ price }}</h3>
    </figcaption>
  </figure>
</template>

<script setup>
import { computed } from "vue";
import AddButton from "./AddButton.vue";
import QuantityControls from "./QuantityControls.vue";

import { useCartStore } from "@/store/Cart";
import { formatCents } from "@/utils/money";

const props = defineProps({
  product: Object,
  prodName: {
    type: String,
  },
  prodImage: {
    type: Object,
  },
  prodId: {
    type: Number,
  },
  prodCategory: {
    type: String,
  },
  prodPrice: {
    type: Number,
  },
});

const store = useCartStore();

function handleAdd() {
  store.addItem(props.product);
}

async function updateQuantity(id, type) {
  if (type === "increment") {
    store.incrementQuantity(id);
  } else store.decrementQuantity(id);
}

const price = computed(() => formatCents(props.prodPrice));

const quantity = computed(() => {
  const item = store.getItem(props.prodId);
  return item ? item.quantity : 0;
});

const isInCart = computed(() => store.isInCart(props.prodId));
</script>

<style scoped>
.product__action {
  display: flex;
  justify-content: center;
  margin-top: -2rem;
  height: 4.4rem;
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
  border-color: var(--color-red);
  transition: all 0.22s ease 0.2s;
}

.fade-pop-enter-active,
.fade-pop-leave-active {
  transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fade-pop-enter-from {
  opacity: 0;
  transform: scale(0.92) translateY(4px);
}

.fade-pop-leave-to {
  opacity: 0;
  transform: scale(0.92) translateY(-4px);
}
</style>
