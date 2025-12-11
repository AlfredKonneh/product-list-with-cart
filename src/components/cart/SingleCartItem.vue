<template>
  <li class="item">
    <div>
      <h3 class="item__name">{{ itemName }}</h3>
      <span class="item__quantity">{{ itemQuantity }}x</span>
      <span class="item__price">@ {{ price }}</span>
    </div>

    <base-button mode="btn-tiny" @click="$emit('remove-item', itemId)">
      <icon-remove></icon-remove>
    </base-button>
  </li>
</template>

<script setup>
import { formatCents } from "@/utils/money";
import { computed } from "vue";
import IconRemove from "../icons/IconRemove.vue";

defineEmits(["remove-item"]);

const props = defineProps({
  itemId: Number,
  itemName: String,
  itemPrice: Number,
  itemQuantity: Number,
});

const price = computed(() => formatCents(props.itemPrice));
</script>

<style scoped>
.item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-block: var(--space-400);
  border-bottom: 1px solid var(--color-rose-100);
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

.item__quantity {
  color: var(--color-red);
  font-weight: 600;
}
</style>
