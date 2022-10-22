<template>
    <div class="min-h-screen hero bg-base-200">
        <div class="text-center hero-content">
            <div class="overflow-x-auto">
                <vue-awesome-paginate
                        :total-items="users.totalRecord"
                        :items-per-page="pageSize"
                        :max-pages-shown="5"
                        :current-page="page"
                        :on-click="onClickHandler"
                    />
                <p>ข้อมูลผู้ใช้จำนวน {{users.totalRecord}}</p>
                    <table class="table w-full table-normal">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>fullname</th>
                                <th>detail</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr v-for="item in users.data">
                            <td>
                                {{item.id}}
                            </td>
                            <td>
                                {{item.fullname}}
                            </td>
                            <td>
                                <NuxtLink class="btn glass" :to="`/dashboard/${item.id}`">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    const page = ref(1);
    const pageSize = ref(5);
    const users = ref(null);
    const { data } = await useFetch(`http://localhost:3000/api/user/paginate?page=${page.value}&pageSize=${pageSize.value}`,
        {
            initialCache: false
        }
    );
    users.value = data.value;
    // return { data };
    // const {data} = await useGetUser();
    
    const onClickHandler = async (pageNumber) => {
        console.log(pageNumber);
        const { data } = await useFetch(`http://localhost:3000/api/user/paginate?page=${pageNumber}&pageSize=${pageSize.value}`,
        {
            initialCache: false
        }
        );
        users.value = data.value;
    };
</script>
