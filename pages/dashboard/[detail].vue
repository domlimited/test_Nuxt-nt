<template>
    <div class="min-h-screen hero bg-base-200">
        <div class="grid grid-cols-1 gap-4 text-center hero-content" >
            <div class="border mockup-window bg-base-300">
                <FormKit type="form" :actions="false" incomplete-message="กรุณากรอกข้อมูลให้ครบถัวน" @submit="update_user">
                    <FormKit 
                        type="text"
                        name="fullname"
                        label="ชื่อ-นามสกุล"
                        validation="required"
                        :validation-messages="{
                            required: 'กรุณากรอก ชื่อ'
                        }"
                    />
                    {{round.params.detail}}
                    <div class="mt-6 form-control">
                        <FormKit 
                            type="submit"
                            label="แก้ไข"
                            input-class="$reset btn btn-primary w-full"
                        />
                    </div>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Swal from 'sweetalert2';
    const round = useRoute();
    
    // const update_user = async (myForm) => {
        // const {data: product, pending} = await uesGetProduct_ByID(round.params.detail);
        // const { data } = await useLazyFetch(`http://localhost:3000/api/user/${round.params.detail}.put`);

        // const { data } = await User.update({ fullname: myForm.fullname }, {
        //     where: {
        //     id: round.params.detail
        //     }
        // });
        // console.log(data);
        // if(data.value){
        //     Swal.fire({
        //         title: 'เกิดข้อผิดพลาด!',
        //         text: 'เรียบร้อย',
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //     });
    //     }
    // }
</script>