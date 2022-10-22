<template>
    <div class="min-h-screen hero bg-base-200">
        <div class="grid grid-cols-3 gap-4 text-center hero-content" >
            <div v-for="item_detail in product.data">
                <NuxtLink :to="`https://www.youtube.com/watch?v=${item_detail.ch_url}`">
                    <div class="border mockup-window bg-base-300">
                        <div class="flex justify-center px-4 py-16 bg-base-200">{{item_detail.ch_title}}</div>
                        <div class="justify-end px-4 py-4 card-actions">
                            <div class="badge badge-primary">{{item_detail.ch_dateadd}}</div>
                            <div class="badge badge-secondary">{{item_detail.ch_timetotal}}</div>
                            
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const round = useRoute();
    const {data: product, pending} = await uesGetProduct_ByID(round.params.detail);
</script>