<template>
  <div class="grid" :class="varient"><slot></slot></div>
</template>

<script setup>
defineProps({
  varient: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.grid {
  display: grid;
}

.grid--main {
  /* align-items: flex-start; */
  gap: var(--space-600);
  max-width: 200rem;
  margin-inline: auto;
}

.grid--products {
  column-gap: var(--space-500);
  row-gap: var(--space-600);
}

@media screen and (min-width: 48rem) {
  .grid--products {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 64rem) {
  .grid--main {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
