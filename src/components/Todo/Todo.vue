<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useTaskStore } from '@/stores/task'


const taskStore = useTaskStore()
let checkedCategory = ref<string[]>([])
const title = ref("")
const description = ref("")

const handleAddTask = computed(() => {
    taskStore.addTask(title.value, description.value, checkedCategory.value)
    title.value = ""
    description.value = ""
    checkedCategory.value = []
})

</script>

<template>
        <div class="row">
            <div>
                <input type="text" placeholder="Title" v-model="title">
            </div>
            <div>
                <input type="text" placeholder="Description" v-model="description">
            </div>
            <div>
                <p>Category</p>
                <div>
                    <label for="design">Design</label>
                    <input type="checkbox" value="Design" v-model="checkedCategory" />
                </div>
                <div>
                    <label for="marketing">Marketing</label>
                    <input type="checkbox" id="marketing" value="Marketing" v-model="checkedCategory"/>
                </div>
                <p>{{checkedCategory}}</p>
            </div>
            <div>
                <button @click="handleAddTask" class="btn btn-primary">Add Item</button>
            </div>
        </div>
</template>

<style scoped>

</style>
