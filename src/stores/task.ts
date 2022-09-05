import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {Task, Category} from '@/models/Task'

export const useTaskStore = defineStore('task', () => {
  const task = ref<Task[]>([])

  const getNumberOfTasks = computed(()=>{
    return task.value.length
  })

  const addTask = (label: string, description: string, category: Category) => {
    // todo.value.unshift({
    //   id: Math.random().toString(),
    //   label,
    //   task,
    //   category
    // })
    let newTask = [...task.value, {
      id: Math.random().toString(),
      label,
      description,
      category,
      isCompleted: false
    }]
    task.value = newTask
    return
  }

  const deleteTask = (id: string) => {
    let newTask = [...task.value]
    let filteredTasks = newTask.filter((item)=>item.id !== id)
    task.value = filteredTasks
    return
  }

  const setCompletedTask = (id: string) => {
    let newTask = [...task.value]
    newTask.map((task)=>{
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
    })
    task.value = newTask
  }


  // const setCompletedTask = (id: string) => {

  // }

  return { task, getNumberOfTasks, addTask, deleteTask, setCompletedTask }
  
})


// {
//   id: 1,
//   taskHeading: "Design signup flow",
//   taskDetail: "When a user arrives at a prospective place, he or she has to evaluate things",
//   completed: false,
//   category: ['Design'],
//   attachments: 1
//   messages: 3
// }