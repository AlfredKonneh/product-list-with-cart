import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '@/components/conposables/useLocalStorage'

export const useCartStore = defineStore('Cart', () => {
  const { data: cart } = useLocalStorage('cart', [])

  const getItem = (id) => {
    return cart.value.find((item) => item.id === id)
  }

  const isInCart = (id) => {
    return cart.value.some((item) => item.id === id)
  }

  function addItem(item) {
    const exists = getItem(item.id)

    if (exists) {
      incrementQuantity(item.id)
    } else {
      cart.value.push({
        name: item.name,
        id: item.id,
        price: item.priceCents,
        thumbnail: item.thumbnail,
        quantity: 1,
      })

      console.log(cart)
    }
  }

  function incrementQuantity(id) {
    const item = getItem(id)
    if (!item) return
    item.quantity++
  }

  function decrementQuantity(id) {
    const item = getItem(id)
    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeItem(id)
    }
  }

  function removeItem(id) {
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  function resetCart() {
    cart.value = []
  }

  const itemCount = computed(() => cart.value.reduce((acc, curr) => acc + curr.quantity, 0))

  const totalPrice = computed(() =>
    cart.value.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
  )

  const hasItem = computed(() => cart.value.length > 0)

  return {
    cart,
    addItem,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    itemCount,
    totalPrice,
    isInCart,
    getItem,
    hasItem,
    resetCart,
  }
})
