<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

const showCard = computed(() => {
  return taskStore.getNumberOfTasks > 0;
});

const showNoAvailableTask = computed(() => {
  return taskStore.getNumberOfTasks <= 0;
});
const handleDeleteTask = (id: string) => {
  taskStore.deleteTask(id);
};

const handleCheckboxClick = (id: string) => {
  taskStore.setCompletedTask(id);
};
</script>

<template>
  <section class="mt-4">
    <div v-show="showNoAvailableTask">
      <p class="fw-light">No available task</p>
    </div>
    <div
      v-show="showCard"
      class="card shadow-sm bg-body rounded my-3 border-0"
      v-for="task in taskStore.task"
      :key="task.id"
    >
      <div class="m-2 p-2 card-body">
        <div class="d-flex flex-row flex-wrap justify-content-between">
          <div class="d-flex flex-row">
            <div>
              <input
                type="checkbox"
                v-model="task.completed"
                @change="handleCheckboxClick(task.id)"
              />
            </div>
            <div class="ms-4">
              <h5 class="card-title" :class="{ isCompleted: task.isCompleted }">
                {{ task.label }}
              </h5>
              <p class="card-text" :class="{ isCompleted: task.isCompleted }">
                {{ task.description }}
              </p>
              <div class="d-flex flex-row flex-wrap justify-content-between">
                <div v-for="category in task.category" :key="category">
                  <div
                    class="d-flex flex-row justify-content-between card shadow-sm bg-body px-3 me-2"
                    v-if="category === 'Marketing'"
                  >
                    <i class="bi bi-palette mb-1"></i>
                    <small class="fw-light ps-2 mt-1">Marketing</small>
                  </div>
                  <div
                    class="d-flex flex-row justify-content-between card shadow-sm bg-body px-3 me-2"
                    v-if="category === 'Design'"
                  >
                    <i class="bi bi-palette mb-1"></i>
                    <small class="fw-light ps-2 mt-1">Design</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="handleDeleteTask(task.id)"
            >
              Delete<i class="bi bi-trash ps-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.isCompleted {
  text-decoration: line-through;
}
</style>
