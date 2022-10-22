<template>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="imgs/IMG_4782.JPG" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">เกี่ยวกับฉัน!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <NuxtLink to="/" class="btn btn-primary">เข้าสู่ระบบ</NuxtLink>
        </div>
      </div>
    </div>
  </template>

  <script setup>
    // const config = useRuntimeConfig();
    const result = useAdd(20 ,30);
    let date_Show = ShowDate();
    const b = userCalender();
    const c = userC();
  </script>
  