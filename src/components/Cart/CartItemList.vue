<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const addCards = inject('addCards')
</script>

<template>
  <div v-auto-animate class="flex flex-col gap-5 flex-1 overflow-hidden overflow-y-auto -mr-5 pr-3">
    <CartItem
      v-for="card in addCards"
      :key="card.id"
      :image-url="card.img"
      :title="card.title"
      :price="card.price"
    />
  </div>
</template>