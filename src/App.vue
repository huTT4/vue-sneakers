<script setup>
import { provide } from 'vue'

import useAxios from '@/composables/useAxios'
import useButtons from '@/composables/useButtons'
import useDrawer from '@/composables/useDrawer'
import useSort from '@/composables/useSort'

import TheHeader from '@/components/TheHeader.vue'
import Drawer from '@/components/Cart/Drawer.vue'

const { cards, addCards, favouriteCards, update, fetchCards, findCard, loading, addCompletedOrders, getLastOrderId } = useAxios(true)
const { addBtn, favouriteBtn } = useButtons(findCard, update)
const { drawerIsOpen, toggleDrawer, removeDrawerItem, placeOrder, orderPlaced, orderNumber } = useDrawer(findCard, update, addCompletedOrders, getLastOrderId)
const { filters, changeFilters, clearInput } = useSort(fetchCards)

// for All
provide('loading', loading)

// for HomePage
provide('changeFilters', changeFilters)
provide('filters', filters)

// for FavouritesPage
provide('favouriteCards', favouriteCards)

// for Main
provide('cards', cards)
provide('changeStateButtons', { addBtn, favouriteBtn })
provide('clearInput', () => clearInput(filters))

// for Drawer
provide('addCards', addCards)
provide('toggleDrawer', toggleDrawer)
provide('removeDrawerItem', removeDrawerItem)
provide('placeOrder', () => placeOrder(cards))
provide('orderPlaced', orderPlaced)
provide('orderNumber', orderNumber)
</script>

<template>
  <Drawer v-if="drawerIsOpen" />

  <div class="bg-white w-4/5 m-auto rounded-3xl shadow-xl mt-18">
    <TheHeader />

    <div class="p-15">
      <router-view></router-view>
    </div>
  </div>
</template>