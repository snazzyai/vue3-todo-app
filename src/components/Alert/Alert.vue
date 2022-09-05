<script setup lang="ts">
const props = defineProps({
    error: {
        type: String
    }
})


</script>

<template>

    <div class="alert alert-warning">{{ props.error }}</div>
</template>

<style scoped>
</style>
