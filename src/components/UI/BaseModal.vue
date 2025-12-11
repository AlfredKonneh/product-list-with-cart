<template>
  <teleport to="body">
    <transition name="modal" mode="out-in">
      <div v-if="showDialog" class="overlay">
        <div class="dialog-container">
          <dialog class="dialog" open>
            <slot name="content"></slot>
            <menu>
              <slot></slot>
            </menu>
          </dialog>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  showDialog: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.showDialog,
  (val) => {
    document.body.style.overflow = val ? "hidden" : "";
  }
);
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2%;
  z-index: 50;
}

.dialog-container {
  max-width: 60rem;
  width: 95%;
  transition: transform 0.28s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: scale(1);
}

.dialog {
  background-color: white;
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--space-400);
  margin-inline: auto;
  min-width: 85%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .dialog-container,
.modal-leave-to .dialog-container {
  transform: scale(0.93);
}

.modal-enter-from .dialog-container,
.modal-leave-to .dialog-container {
  transform: scale(0.9);
}
</style>
