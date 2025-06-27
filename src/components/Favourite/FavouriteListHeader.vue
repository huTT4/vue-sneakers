<script setup>
import { inject } from 'vue'

const back = inject('back')
</script>

<template>
  <div class="flex items-center gap-5 mb-9">
    <button @click="back" class="cursor-pointer hover:scale-110 transition">
      <img src="/back-arrow.svg" alt="Back" />
    </button>
    <h2 class="text-[32px] font-bold">Мои закладки</h2>
  </div>
</template>
