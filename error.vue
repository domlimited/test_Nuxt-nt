<template>
    <div class="min-h-screen hero bg-base-200">
        <div class="text-center hero-content">
            <div class="max-w-md">
            <h1 class="text-5xl font-bold">Error 999</h1>
            <p v-if="error" class="py-6">{{error.message}}</p>
            <button @click="handleError" class="btn btn-primary">กลับไปหน้าหลัก</button>
            </div>
        </div>
    </div>
</template>

<script setup>

    defineProps({
        error: Object
    });

    const handleError = () => clearError({ redirect: '/' })
</script>