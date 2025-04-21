<script setup>
import { inject, reactive, watch } from 'vue'

const emits = defineEmits(['change-filters'])

const filters = reactive({
  input: '',
  select: 'default'
})

// очистка
const mainFilters = inject('filters')
watch(mainFilters, (newV) => filters.input = newV.input)

watch(filters, (newV) => emits('change-filters', newV))
</script>

<template>
  <div class="flex justify-between items-center mb-9">
    <h2 class="text-[32px] font-bold">Все кроссовки</h2>

    <div class="flex gap-4">
      <select v-model="filters.select" class="border border-gray-200 rounded-2xl py-2.5 px-3 outline-none">
        <option value="default">По умолчанию</option>
        <option value="title">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>

      <label class="relative flex items-center cursor-text">
        <img class="absolute left-4.5" src="/search.svg" alt="Search" />
        <input
          v-model="filters.input"
          class="border border-gray-200 pl-11.5 pr-4.5 py-2.5 rounded-2xl w-3xs outline-none focus:border-gray-400"
          type="text"
          placeholder="Поиск..."
        />
      </label>
    </div>
  </div>
</template>