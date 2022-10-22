<template>
    <div>
        Version : {{data.data.version}}
    </div>
</template>

<script setup>
    const {data} = await uesGetApiVersion();
</script>