<template>
    <div class="min-h-screen hero bg-base-200">
        <div class="text-center hero-content">
            <p v-if="pending">
                <progress class="w-56 progress bg-error"></progress>
            </p>
            <div v-if="product">
                <div class="overflow-x-auto">
                    <table class="table w-full table-normal">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>detail</th>
                            <th>date</th>
                            <th>view</th>
                            <th>picture</th>
                            <th>detail</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in product.data">
                                <td>
                                    {{item.id}}
                                </td>
                                <td>
                                    {{item.title}}
                                </td>
                                <td>
                                    {{item.detail}}
                                </td>
                                <td>
                                    {{item.date}}
                                </td>
                                <td>
                                    {{item.view}}
                                </td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-16 mask mask-squircle">
                                            <img :src="item.picture" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <NuxtLink class="btn glass" :to="`/product/${item.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    </NuxtLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    const {data: product, pending} = await uesGetProduct();
</script>