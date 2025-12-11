// composables/useLocalStorage.js
import { ref, watch } from "vue";

export function useLocalStorage(key, defaultValue) {
  const saved = localStorage.getItem(key);

  const data = ref(saved ? JSON.parse(saved) : defaultValue);

  watch(
    data,
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    { deep: true }
  );

  function clear() {
    localStorage.removeItem(key);
    data.value = defaultValue;
  }

  return { data, clear };
}
