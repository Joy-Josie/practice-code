<script setup lang="ts">
import { ref } from 'vue'

const arr = ref([1, 2, 3])
</script>

<template>
  <div v-for="item in arr">{{ item }}</div>
</template>

<style></style>
