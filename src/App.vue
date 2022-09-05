<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Todo from '@/components/Todo/Todo.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
</script>

<template>
  <div class="bg-light my-md-0 mx-md-auto px-5 py-5">
    <Header />
    <main>
      <Todo />
      <TodoList />
    </main>
  </div>
</template>

<style scoped>
</style>
