<template>
  <base-button mode="btn-add-to-cart" @click="$emit('add-item', prodId)">
    <icon-cart />
    <span> add to cart </span>
  </base-button>
</template>

<script setup>
import IconCart from "../icons/IconCart.vue";

defineEmits(["add-item"]);
defineProps({ prodId: Number });
</script>

<style lang="scss" scoped></style>
