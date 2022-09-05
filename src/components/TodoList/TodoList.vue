<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

const handleDeleteTask = (id: string) => {
    taskStore.deleteTask(id)
}


</script>

<template>
        <section class="mt-3">
            <div v-show="taskStore.getNumberOfTasks <= 0">
                <p>No available task</p>
            </div>
            <div v-show="taskStore.getNumberOfTasks > 0" class="card-body" v-for="task in taskStore.task" :key="task.id">
                <div class="m-2 p-4 card-item" >
                    <h5 class="card-title">{{task.label}}</h5>
                    <p class="card-text">{{task.description}}</p>
                    <button @click="handleDeleteTask(task.id)">Delete</button>
                </div>
            </div>
        </section>
</template>

<style scoped>

</style>
