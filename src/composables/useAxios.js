import { reactive, onMounted, computed, ref } from 'vue'
import axios from 'axios'

export default function useAxios(isStart) {
  const cards = reactive([])
  const addCards = computed(() => cards.filter(c => c.isAdded))
  const favouriteCards = computed(() => cards.filter(c => c.isFavourite))
  const loading = ref(false)

  const updateCard = async (name, type, changeItem) => {
    try {
      if (changeItem) {
        await axios.patch(import.meta.env.VITE_API_URL + '/' + name + '/' + type.id, type)
      } else {
        await axios.patch(import.meta.env.VITE_API_URL + '/' + name, type)
      }
    } catch (err) {
      console.log('Ошибка:', err.message)
    }
  }

  const update = (changeItem = false, card) => {
    if (changeItem) {
      updateCard('items', card, changeItem)
    } else {
      updateCard('items', cards)
    }
    updateCard('orders', addCards.value)
    updateCard('favourites', favouriteCards.value)
  }

  const getData = async (input, select) => {
    try {
      loading.value = true
      const params = { sortBy: select }
      if (input) params.title = `*${input}`
      const { data } = await axios(import.meta.env.VITE_API_URL_ITEMS, { params })
      return data
    } catch (err) {
      console.log('Ошибка:', err.message)
    } finally {
      loading.value = false
    }
  }

  const fetchCards = (input = '', select = '') => getData(input, select).then(data => cards.splice(0, cards.length, ...data))

  if (isStart) {
    onMounted(fetchCards)
  }

  const findCard = url => cards.find((c) => c.img === url)

  const addCompletedOrders = async (fCards) => {
    try {
      await axios.post(import.meta.env.VITE_API_URL_COMPLETED_ORDERS, {
        cards: fCards
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  const getLastOrderId = async () => {
    try {
      const { data } = await axios(import.meta.env.VITE_API_URL_COMPLETED_ORDERS)
      return data.length ? data[data.length - 1].id : 0
    } catch (err) {
      console.log(err.message)
    }
  }

  return {
    cards, addCards, favouriteCards, update, fetchCards, findCard, loading, addCompletedOrders, getLastOrderId
  }
}