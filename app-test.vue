<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1> My Name is : {{hello}} {{lastname+20}} {{hello.toUpperCase()}}</h1>
    <p v-if="isShow">เช้าวันนี้ที่ : {{ new Date().toLocaleDateString()}}</p>
    <img :src="imgURL.url" alt="" v-if="isShow === true">
    <div v-if="users.length" v-for="user in users" class="card">
      <a href="#" :key="user.id">{{ user.fullname}}</a>
    </div>
  </div>
  <button @mouseover="toggleMe">คลิกสิ !</button>
</template>

<script setup>
  let hello = ref('DomJi');
  let lastname = ref(20);
  let imgURL = reactive({
    url: 'https://via.placeholder.com/100',
    alt: 'รูปฉันเอง'
  });
  let isShow = ref(true);
  let users = ref([
    {id: 1,fullname: 'DOmJI'},
    {id: 2,fullname: 'DOmJI2'},
    {id: 3,fullname: 'DOmJI3'},
    {id: 4,fullname: 'DOmJI4'}
  ]);

  const toggleMe = () =>{
    isShow.value = !isShow.value;
  }

  function greett () {
    // alert('เย้');
    hello.value = 'test';
    lastname.value = '40';
    imgURL.url = 'https://via.placeholder.com/200'
  }
  // const greet = () =>{
  //   alert('เย้');
  // }

  // setTimeout(() => {
  //   onMounted(() => {
  //     console.log('เทสออนเม้า');
  //   })
  // }, 100)

</script>