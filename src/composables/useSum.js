import { computed } from 'vue'

export default function useSum(addCards) {
  const sumAddedItems = computed(() => {
    let sum = 0
    for (const [_, card] of Object.entries(addCards.value)) {
      sum += card.price
    }
    return sum.toLocaleString('ru-RU')
  })

  const taxSum = computed(() => (Number(sumAddedItems.value.split(/\s+/).join('')) * 0.05).toFixed(2))

  return {
    sumAddedItems,
    taxSum
  }
}