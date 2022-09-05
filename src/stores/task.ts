import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Task, Category } from "@/models/Task";

export const useTaskStore = defineStore("task", () => {
  const task = ref<Task[]>([]);

  const getNumberOfTasks = computed(() => {
    return task.value.length;
  });

  const addTask = (label: string, description: string, category: Category) => {
    const newTask = [
      ...task.value,
      {
        id: Math.random().toString(),
        label,
        description,
        category,
        isCompleted: false,
      },
    ];
    task.value = newTask;
    return;
  };

  const deleteTask = (id: string) => {
    const newTask = [...task.value];
    const filteredTasks = newTask.filter((item) => item.id !== id);
    task.value = filteredTasks;
    return;
  };

  const setCompletedTask = (id: string) => {
    const newTask = [...task.value];
    newTask.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });
    task.value = newTask;
  };

  return { task, getNumberOfTasks, addTask, deleteTask, setCompletedTask };
});
