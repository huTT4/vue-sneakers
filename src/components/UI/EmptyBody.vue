<script setup>
defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  click: {
    type: Function,
    required: true
  },
  textBtn: String
})
</script>

<template>
  <div class="flex-1 flex flex-col justify-center items-center">
    <img :class="imgSrc === '/package-icon.png' || imgSrc === '/order-success-icon.png' ? 'h-30' : 'h-17.5'" :src="imgSrc" :alt="imgSrc" />
    <div class="mt-3 mb-8 text-center">
      <h3 class="font-bold text-[22px] mb-2">
        <slot name="header"></slot>
      </h3>
      <p class="text-gray-400 text-lg/[150%]">
        <slot name="descr"></slot>
      </p>
    </div>
    <button
      @click="click"
      class="flex items-center justify-between w-61 bg-lime-500 rounded-[18px] py-4 px-7 text-lg font-semibold text-white cursor-pointer hover:bg-lime-600 transition active:scale-95"
    >
      <svg
        class="rotate-180"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="flex-1">{{ textBtn ? textBtn : 'Вернуться назад' }}</span>
    </button>
  </div>
</template>