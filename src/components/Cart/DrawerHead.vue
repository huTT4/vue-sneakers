<script setup>
import { inject } from 'vue'

const closeDrawer = inject('toggleDrawer')
</script>

<template>
  <div class="flex items-center gap-5 mb-7.5">
    <div @click="closeDrawer" class="p-2 group cursor-pointer">
      <svg
        class="opacity-30 rotate-180 group-hover:opacity-100 group-hover:-translate-x-1 transition"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <h2 class="text-2xl font-bold">Корзина</h2>
  </div>
</template>