<script setup>
import { inject, provide } from 'vue'
import { useRouter } from 'vue-router'

import FavouriteListHeader from '@/components/Favourite/FavouriteListHeader.vue'
import FavouriteList from '@/components/Favourite/FavouriteList.vue'
import EmptyBody from '@/components/UI/EmptyBody.vue'

const favouriteCards = inject('favouriteCards')

const router = useRouter()
const back = () => router.push('/')
provide('back', back)
</script>

<template>
  <FavouriteListHeader />
  <div v-auto-animate>
    <div v-if="favouriteCards.length">
      <FavouriteList />
    </div>
    <empty-body v-else imgSrc="/emoji-1.png" :click="back">
      <template #header>Закладок нет :(</template>
      <template #descr>Вы ничего не добавляли в закладки</template>
    </empty-body>
  </div>
</template>