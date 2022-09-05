<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()


</script>

<template>
  <header>
    <h4>Welcome, Stan </h4>
    <p class="fw-light text-sm">You've got {{taskStore.getNumberOfTasks}} tasks coming up in the next days</p>
</header>
</template>

<style scoped>

</style>
