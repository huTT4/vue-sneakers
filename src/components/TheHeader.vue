<script setup>
import { inject } from 'vue'
import useSum from '@/composables/useSum'

const openDrawer = inject('toggleDrawer')

const addCards = inject('addCards')

const { sumAddedItems } = useSum(addCards)
</script>

<template>
  <header class="flex justify-between items-center border-b border-slate-200 px-11 py-10">
    <!-- Logo and name -->
    <router-link to="/" class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10" />
      <div>
        <h1 class="text-xl font-bold uppercase">Vue Sneakers</h1>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </router-link>

    <!-- Navigation -->
    <nav>
      <ul class="flex items-center gap-8">
        <li @click="openDrawer" class="flex items-center gap-2 text-gray-500 hover:text-black duration-200 cursor-pointer">
          <img src="/cart.svg" alt="Cart" />
          <span class="font-bold">{{ sumAddedItems }} руб.</span>
        </li>
        <li>
          <router-link to="/favourites" class="flex items-center gap-2 text-gray-500 hover:text-black duration-200 cursor-pointer">
            <img src="/heart.svg" alt="Cart" />
            <span>Закладки</span>
          </router-link>
        </li>
        <li class="flex items-center gap-2 text-gray-500 hover:text-black duration-200 cursor-pointer">
          <img src="/profile.svg" alt="Cart" />
          <span>Профиль</span>
        </li>
      </ul>
    </nav>
  </header>
</template>
