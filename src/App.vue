<script setup lang="ts">
import TodoHeader from "@/components/TodoHeader/TodoHeader.vue";
import TodoInput from "@/components/TodoInput/TodoInput.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
</script>

<template>
  <div class="bg-light my-md-0 mx-md-auto px-5 py-5">
    <TodoHeader />
    <main>
      <TodoInput />
      <TodoList />
    </main>
  </div>
</template>

<style scoped>
</style>
