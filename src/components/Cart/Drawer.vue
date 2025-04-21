<script setup>
import { inject } from 'vue'

import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import DrawerFooter from './DrawerFooter.vue'
import EmptyBody from '../UI/EmptyBody.vue'

const closeDrawer = inject('toggleDrawer')

const addCards = inject('addCards')

const orderPlaced = inject('orderPlaced')

const orderNumber = inject('orderNumber')
</script>

<template>
  <div @click="closeDrawer" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-7.5 flex flex-col">
    <DrawerHead />

    <div v-auto-animate class="h-[93%]" :class="{ 'flex justify-center': !addCards.length }">
      <div v-if="addCards.length" class="flex flex-col h-full">
        <CartItemList />
        <DrawerFooter />
      </div>

      <empty-body v-else-if="orderPlaced" imgSrc="/order-success-icon.png" :click="closeDrawer">
        <template #header>Заказ оформлен!</template>
        <template #descr>Ваш заказ #{{ orderNumber }} скоро будет передан курьерской доставке</template>
      </empty-body>

      <empty-body v-else imgSrc="/package-icon.png" :click="closeDrawer">
        <template #header>Корзина пустая</template>
        <template #descr>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</template>
      </empty-body>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>