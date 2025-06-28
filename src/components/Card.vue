<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavourite: Boolean,
  isAdded: Boolean,
})

const { addBtn, favouriteBtn } = inject('changeStateButtons')

const formattedPrice = computed(() => props.price.toLocaleString('ru-RU'))
</script>

<template>
  <div class="flex flex-col justify-between relative bg-white border border-slate-100 rounded-4xl p-7.5 cursor-pointer shadow-[0_14px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-xl transition">
    <button @click="favouriteBtn(imageUrl)" class="cursor-pointer absolute top-7.5 left-7.5 hover:scale-120 transition">
      <img :src="isFavourite ? '/vue-sneakers/like-2.svg' : '/vue-sneakers/like-1.svg'" :alt="isFavourite ? 'Liked' : 'Like'" />
    </button>
    
    <img :src="imageUrl" alt="Sneaker" />

    <p class="mt-3.5 mb-3.5">{{ title }}</p>

    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-slate-400 text-xs uppercase">Цена:</span>
        <span class="font-bold">{{ formattedPrice }} руб.</span>
      </div>

      <button @click="addBtn(imageUrl)" class="cursor-pointer hover:scale-120 transition">
        <img :src="isAdded ? '/vue-sneakers/checked.svg' : '/vue-sneakers/plus.svg'" :alt="isAdded ? 'Checked' : 'Add'" />
      </button>
    </div>
  </div>
</template>
