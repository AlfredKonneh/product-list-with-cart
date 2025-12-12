<template>
  <li class="item">
    <div class="item__detail">
      <img :src="itemImage" :alt="itemName" class="item__img" v-if="isOrder" />
      <h3 class="item__name">{{ itemName }}</h3>
      <span class="item__quantity">{{ itemQuantity }}x</span>
      <span class="item__price">@ {{ price }}</span>
    </div>

    <base-button v-if="!isOrder" mode="btn-tiny" @click="$emit('remove-item', itemId)">
      <icon-remove></icon-remove>
    </base-button>
    <span v-if="isOrder" class="item__total-price">{{ totalPrice }}</span>
  </li>
</template>

<script setup>
import { formatCents } from '@/utils/money'
import { computed } from 'vue'
import IconRemove from '../icons/IconRemove.vue'

defineEmits(['remove-item'])

const props = defineProps({
  itemId: Number,
  itemImage: String,
  itemName: String,
  itemPrice: Number,
  itemQuantity: Number,
  isOrder: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const price = computed(() => formatCents(props.itemPrice))
const totalPrice = computed(() => formatCents(props.itemPrice * props.itemQuantity))
</script>

<style scoped>
.item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-block: var(--space-400);
  border-bottom: 1px solid var(--color-rose-100);
}

.item__detail {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
}

.item__img {
  width: 4.8rem;
  border-radius: 4px;
  display: block;
}

.item__name {
  color: var(--color-rose-900);
  font-size: 1.4rem;
  margin-bottom: var(--spcing-200);
}

.item__price {
  display: inline-block;
  margin-left: var(--space-200);
  color: var(--color-rose-500);
  font-size: 1.4rem;
}

.item__total-price {
  color: var(--color-rose-900);
  font-weight: 600;
}

.item__quantity {
  color: var(--color-red);
  font-weight: 600;
}
</style>
