import { ref } from 'vue'

export default function useDrawer(findCard, update, addCompletedOrders, getLastOrderId) {
  const drawerIsOpen = ref(false)
  const orderPlaced = ref(false)
  const orderNumber = ref(0)
  getLastOrderId().then(id => orderNumber.value = id)

  const toggleDrawer = () => {
    drawerIsOpen.value = !drawerIsOpen.value
    orderPlaced.value = false
  }

  const removeDrawerItem = (imageUrl) => {
    const card = findCard(imageUrl)
    card.isAdded = false
    update(true, card)
  }

  const placeOrder = (cards) => {
    const filteredCards = cards.filter(card => card.isAdded)
    const cardsForOrder = filteredCards.map(card => {
      return {
        img: card.img,
        title: card.title,
        price: card.price
      }
    })

    addCompletedOrders(cardsForOrder)
    getLastOrderId().then(id => orderNumber.value = id)

    for (const card of filteredCards) {
      card.isAdded = false
      update(true, card)
    }

    orderPlaced.value = true
  }

  return {
    drawerIsOpen,
    toggleDrawer,
    removeDrawerItem,
    placeOrder,
    orderPlaced,
    orderNumber
  }
}