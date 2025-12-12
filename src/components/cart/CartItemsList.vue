<template>
  <transition-group tag="ul" name="list" mode="" class="items">
    <SingleCartItem
      v-for="item in items"
      :key="item.id"
      :item-id="item.id"
      :item-image="item.thumbnail"
      :item-name="item.name"
      :item-price="item.price"
      :item-quantity="item.quantity"
      :is-order="isOrder"
      @remove-item="handleRemoved"
    ></SingleCartItem>
  </transition-group>
</template>

<script setup>
import { useCartStore } from '@/store/Cart'
import { computed } from 'vue'
import SingleCartItem from './SingleCartItem.vue'

defineProps({ isOrder: { type: Boolean, required: false } })

const store = useCartStore()

function handleRemoved(id) {
  store.removeItem(id)
}

const items = computed(() => store.cart)
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-active,
.list-move {
  transition: all 0.4s ease-out;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
