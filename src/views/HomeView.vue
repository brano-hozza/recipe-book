<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <h1 class="text-center w-full text-6xl mb-4">Welcome</h1>
  <div class="flex flex-row justify-between gap-12">
    <div
      class="flex flex-col w-1/2 h-56 items-center justify-center drop-shadow bg-slate-100 hover:bg-slate-200 cursor-pointer"
      @click="router.push('/recipes')"
    >
      <img
        class="w-1/5"
        src="@/assets/book.svg"
        alt="Recipe book (https://www.svgrepo.com/svg/509033/book-open)"
      />
      <h2 class="font-normal text-4xl">Recipes</h2>
    </div>
    <div
      class="flex flex-col w-1/2 h-56 items-center justify-center drop-shadow bg-slate-100 hover:bg-slate-200 cursor-pointer"
      @click="router.push('/resources')"
    >
      <img
        class="w-1/4"
        src="@/assets/groceries.svg"
        alt="Groceries (https://www.svgrepo.com/svg/3868/groceries)"
      />
      <h2 class="font-normal text-4xl">Resources</h2>
    </div>
  </div>
</template>
