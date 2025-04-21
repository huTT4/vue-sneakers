import { reactive } from 'vue'
import debounce from 'lodash.debounce'

export default function useSort(fetchCards) {
  const filters = reactive({
    input: '',
    select: 'default'
  })

  const changeFilters = debounce((val) => {
    filters.input = val.input
    filters.select = val.select
    fetchCards(filters.input, filters.select)
  }, 300)

  const clearInput = (filters) => filters.input = ''

  return {
    filters,
    changeFilters,
    clearInput
  }
}