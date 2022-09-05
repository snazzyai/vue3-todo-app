<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTaskStore } from "@/stores/task";
import Alert from "@/components/TodoAlert/TodoAlert.vue";

const taskStore = useTaskStore();
let checkedCategory = ref<string[]>([]);
const title = ref("");
const description = ref("");
const error = ref("Title and categories fields are required!");
const showError = ref(false);
const alertTimeout = ref(5000);

watchEffect(() => {
  if (showError.value) {
    setTimeout(() => {
      showError.value = false;
    }, alertTimeout.value);
  }
});

const handleAddTask = () => {
  if (!title.value || checkedCategory.value.length <= 0) {
    showError.value = true;
    return;
  }
  taskStore.addTask(title.value, description.value, checkedCategory.value);
  title.value = "";
  description.value = "";
  checkedCategory.value = [];
  return;
};
</script>

<template>
  <section>
    <div>
      <div v-if="showError">
        <Alert :error="error" />
      </div>
      <div class="input-group mb-3 w-20">
        <input type="text" class="form-control shadow-none" placeholder="Title" aria-label="task title"
          v-model="title" />
      </div>
      <div class="input-group mb-3">
        <textarea class="form-control shadow-none" placeholder="Description" aria-label="task description"
          v-model="description"></textarea>
      </div>
      <h5>Choose a category</h5>
      <div class="input-group">
        <div class="input-group-text">
          <input type="checkbox" class="form-check-input mx-1 mb-1" aria-label="checkbox for checking marketing"
            id="marketing" value="Marketing" v-model="checkedCategory" />
          <label for="marketing">Marketing</label>
        </div>
        <div class="input-group-text">
          <input type="checkbox" class="form-check-input mx-1 mb-1" id="design"
            aria-label="checkbox for checking design" value="Design" v-model="checkedCategory" />
          <label for="design">Design</label>
        </div>
      </div>
      <div>
        <button @click="handleAddTask" class="btn btn-primary my-3">
          Add Item<i class="bi bi-clipboard ps-2"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
