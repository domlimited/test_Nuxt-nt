<template>
    <div class="min-h-screen hero" style="background-image: url(/imgs/IMG_4288.JPG);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">
            <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">ติดต่อเรา</h1>
            <p v-if="pending">
                <progress class="w-56 progress bg-error"></progress>
            </p>
            <p v-if="error">
                <ClientOnly>
                <div class="shadow-lg alert alert-error">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! เกิดข้อผิดพลาดจากเซิฟเวอร์.</span>
                    </div>
                </div>
                </ClientOnly>
            </p>
            <p v-if="data" class="mb-5">
                version : {{data.data.version}}<br>
                message : {{data.message}}
            </p>

        
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "default",
    });
    //const { data } = await useFetch('https://api.codingthailand.com/api/version' , { pick: ['data', 'message'] });

    //const { data, pending } = await useLazyFetch('https://api.codingthailand.com/api/version' , { pick: ['data', 'message'] });

    // const { data, pending } = await useAsyncData('apiversion', () => $fetch('https://api.codingthailand.com/api/version'), { pick: ['data', 'message'] })

    const { data, pending, error } = await useLazyAsyncData('apiversion', () => $fetch('https://api.codingthailand.com/api/version'), { pick: ['data', 'message'] })
    // if (error) {
    //     showError('Error! เกิดข้อผิดพลาดจากเซิฟเวอร์.');
    // }
</script>