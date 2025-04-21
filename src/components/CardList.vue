<script setup>
import { inject } from 'vue'
import Card from './Card.vue'
import EmptyLoadCard from './UI/EmptyLoadCard.vue'
import EmptyBody from './UI/EmptyBody.vue'

const cards = inject('cards')
const loading = inject('loading')
const clearInput = inject('clearInput')
</script>

<template>
  <div v-auto-animate :class="{ 'grid grid-cols-4 gap-10': cards.length || loading }">
    <template v-if="!loading && cards.length">
      <Card
        v-for="card in cards"
        :key="card.id"
        :image-url="card.img"
        :title="card.title"
        :price="card.price"
        :is-favourite="card.isFavourite"
        :is-added="card.isAdded"
      />
    </template>

    <template v-else-if="loading">
      <EmptyLoadCard v-for="i in 8" :key="i" />
    </template>

    <empty-body v-else-if="!cards.length" imgSrc="/emoji-2.png" :click="clearInput" textBtn="Очистить ввод">
      <template #header>Таких товаров нет :(</template>
      <template #descr>Попробуйте ввести что-нибудь другое</template>
    </empty-body>
  </div>
</template>