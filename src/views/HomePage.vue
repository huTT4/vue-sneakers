<script setup>
import { inject } from 'vue'

import CardList from '@/components/CardList.vue'
import CardListHeader from '@/components/CardListHeader.vue'

const changeFilters = inject('changeFilters')
</script>

<template>
  <CardListHeader @change-filters="changeFilters" />
  <CardList />
</template>