<template>
    <div>
        <h1 v-if="loading">Loading...</h1>
        <h1 v-else-if="error">{{ error }}</h1>
        <h1 v-else>{{ message }}</h1>
        <button @click="fetchMessage" :disabled="loading">
            qweddd1111112333444
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const message = ref<string>('')
const loading = ref<boolean>(false)
const error = ref<string>('')

const fetchMessage = async () => {
    loading.value = true
    error.value = ''

    try {
        const response = await fetch('/api/hello')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        message.value = data.message
    } catch (err) {
        error.value = 'Error fetching message from backend'
        console.error('Fetch error:', err)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchMessage()
})
</script>

<style>
button {
    color: blue;
}
</style>
