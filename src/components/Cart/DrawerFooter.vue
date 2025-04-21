<script setup>
import { inject } from 'vue'
import useSum from '@/composables/useSum'

const addCards = inject('addCards')

const placeOrder = inject('placeOrder')

const { sumAddedItems, taxSum } = useSum(addCards)
</script>

<template>
  <div class="flex flex-col gap-3 pt-4">
    <div class="flex gap-2">
      <span>Итого:</span>
      <div class="flex-1 border-b border-dashed border-slate-300 mb-1"></div>
      <span class="font-bold">{{ sumAddedItems }} руб.</span>
    </div>

    <div class="flex gap-2">
      <span>Налог 5%:</span>
      <div class="flex-1 border-b border-dashed border-slate-300 mb-1"></div>
      <span class="font-bold">{{ taxSum }} руб.</span>
    </div>

    <button
      @click="placeOrder"
      class="mt-3 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-between w-full bg-lime-500 rounded-[18px] py-4 px-7 text-lg font-semibold text-white cursor-pointer hover:bg-lime-600 transition active:scale-95"
    >
      <span class="flex-1">Оформить заказ</span>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>