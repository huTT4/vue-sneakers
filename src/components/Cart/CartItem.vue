<script setup>
import { inject } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number
})

const removeBtn = inject('removeDrawerItem')

const formattedPrice = computed(() => props.price.toLocaleString('ru-RU'))
</script>

<template>
  <div class="flex items-center gap-5 border border-slate-200 p-5 rounded-2xl">
    <img class="w-17.5 h-17.5" :src="imageUrl" alt="Sneaker" />

    <div class="flex flex-col w-full">
      <p class="w-40">{{ title }}</p>

      <div class="flex justify-between mt-2">
        <span class="font-bold">{{ formattedPrice }} руб.</span>
        <button @click="removeBtn(imageUrl)" class="opacity-40 hover:opacity-100 hover:scale-90 cursor-pointer transition">
          <img src="/close.svg" alt="Remove" />
        </button>
      </div>
    </div>
  </div>
</template>
