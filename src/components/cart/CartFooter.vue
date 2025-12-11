<template>
  <footer>
    <div class="cart__total">
      <span>Total</span>
      <span class="cart__total-value">{{ total }}</span>
    </div>
    <base-button mode="btn-primary" size="full" @click="$emit('confirmedOrder')"
      >confirm order</base-button
    >
  </footer>
</template>

<script setup>
import { formatCents } from "@/utils/money";
import { computed } from "vue";

defineEmits(["confirmedOrder"]);
const props = defineProps({ itemTolal: Number });

const total = computed(() => formatCents(props.itemTolal));
</script>

<style scoped>
footer {
  margin-top: var(--space-700);
}
.cart__total {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-500);
  color: var(--color-rose-900);
}
.cart__total-value {
  color: var(--color-rose-900);
  font-size: 2.4rem;
  font-weight: 700;
}
</style>
