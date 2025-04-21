<script setup>
import { inject } from 'vue'
import Card from '@/components/Card.vue'

const favouriteCards = inject('favouriteCards')
</script>

<template>
  <div v-auto-animate class="grid grid-cols-4 gap-10" >
    <Card
      v-for="card in favouriteCards"
      :key="card.id"
      :image-url="card.img"
      :title="card.title"
      :price="card.price"
      :is-favourite="card.isFavourite"
      :is-added="card.isAdded"
    />
  </div>
</template>