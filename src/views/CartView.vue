<template>
  <base-modal :show-dialog="isLoading">
    <base-spinner></base-spinner>
  </base-modal>

  <ConformationModal
    :show="!isLoading && show"
    @new-order="startNewOrder"
  ></ConformationModal>

  <section class="block">
    <CartWidget :item-count="count"></CartWidget>

    <CartEmpty v-if="!hasItem"></CartEmpty>

    <transition name="fade">
      <div v-if="hasItem">
        <CartItemsList></CartItemsList>
        <CartFooter
          v-show="hasItem"
          :item-tolal="total"
          @confirmed-order="confirmedOrder"
        ></CartFooter>
      </div>
    </transition>
  </section>
</template>

<script setup>
import CartWidget from "@/components/cart/CartWidget.vue";
import CartFooter from "@/components/cart/CartFooter.vue";
import CartEmpty from "@/components/cart/CartEmpty.vue";
import CartItemsList from "@/components/cart/CartItemsList.vue";
import ConformationModal from "@/components/order-conformation/ConformationModal.vue";

import { useCartStore } from "@/store/Cart";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useCartStore();
const { totalPrice: total, itemCount: count, hasItem } = storeToRefs(store);

const show = ref(false);
const isLoading = ref(false);

async function confirmedOrder() {
  isLoading.value = true;

  await new Promise((res) => setTimeout(res, 300));

  isLoading.value = false;
  show.value = true;
}

async function startNewOrder() {
  isLoading.value = true;
  show.value = false;

  await new Promise((res) => setTimeout(res, 300));

  store.resetCart();
  isLoading.value = false;
}
</script>

<style scoped>
.block {
  padding: var(--space-400);
  border-radius: var(--radius-md);
  background-color: var(--color-white);
  min-height: 25rem;
  position: relative;
  align-self: flex-start;
  transition: height 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
