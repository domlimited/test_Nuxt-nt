<template>
    <div class="min-h-screen hero bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">เข้าสู่ระบบตอนนี้</h1>
          <p class="py-6">ยินดีตอนรับ ระบบเทสพัฒนาด้วย Vue,Nuxt,Tailwind,daisyui นะจ๊ะ</p>
        </div>
        <div class="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <div class="card-body">
            <FormKit type="form" :actions="false" incomplete-message="กรุณากรอกข้อมูลให้ครบถัวน" @submit="login">
              <FormKit 
                  type="text"
                  name="email"
                  label="email"
                  validation="required|email"
                  :validation-messages="{
                    required: 'กรุณากรอก email',
                    email: 'รูปแบบ email ไม่ถูกต้อง'
                  }"
                />
                <FormKit 
                  type="password"
                  name="password"
                  label="Password"
                  validation="required|length:6"
                  :validation-messages="{
                    required: 'กรุณากรอก password',
                    length: 'กรุณากรอก password 6 ตัวอักษรขึ้นไป'
                  }"
                />
                <div class="mt-6 form-control">
                  <FormKit 
                    type="submit"
                    label="เข้าสู่ระบบ"
                    input-class="$reset btn btn-primary w-full"
                  />
                </div>
                <div class="mt-1 form-control">
                  <NuxtLink to="/about" class="btn btn-outline btn-primary ">เกี่ยวกับฉัน</NuxtLink>
                </div>
            </FormKit>
           
            <div class="justify-end mt-1 form-control">
              <ApiVersion></ApiVersion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
  import Swal from 'sweetalert2';
  import { useStorage } from '@vueuse/core';
  definePageMeta({
    pageTransition: false
  });

  const login = async (myForm) => {
    const { data, error } = await useLogin(myForm.email,myForm.password);
    if(error.value){
      // console.log(error.value.response);
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: error.value.data?.message,
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
    if(data.value){
      useStorage("token", data.value);
      const {data: responseProfile} = await useGetProfile();
      // console.log(responseProfile.value);
      useState('globalProfile', () => responseProfile);
      navigateTo("/dashboard");
    }
    // console.log(data.value);
  }
</script>
  