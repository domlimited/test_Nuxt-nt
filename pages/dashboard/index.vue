
<template>
    <div class="min-h-screen hero" style="background-image: url(https://placeimg.com/1000/800/arch);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">ยินดีตอนรับ</h1>
          <p class="mb-5">{{profile}}</p>
          <NuxtLink class="btn btn-primary" to="#!" @click="useLogout">ออกจากระบบ</NuxtLink>
        </div>
      </div>
    </div>
</template>
<script setup>
  import Swal from 'sweetalert2';
  import { useStorage } from '@vueuse/core';
  onMounted(()=>{
    const token = useStorage("token",null);
    if(token.value === null){
      navigateTo("/",{replace:true});
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'กรุณาเข้าสู่ระบบก่อน',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
  });
  const profile = useState('globalProfile');

</script>
