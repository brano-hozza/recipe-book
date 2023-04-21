<script setup lang="ts">
const newResource = () => {
  console.log('new resource')
}
</script>
<template>
  <h1 class="text-center w-full text-6xl mb-4">Resources</h1>
  <span
    class="absolute bottom-6 right-6 w-12 h-12 rounded-full text-center text-4xl bg-purple-500 text-white cursor-pointer"
    @click="newResource"
  >
    +
  </span>
</template>
