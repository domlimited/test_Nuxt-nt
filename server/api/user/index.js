import User from "../../../models/user";

export default defineEventHandler( async (event) => {
    const method = event.req.method;
    if(method === 'GET'){
        return findAllUser();
    }else if(method === 'POST'){
        const body = await useBody(event);
        return creatUser(body);
    }else{
        return [{fullname :null,id :null}];
    }
});

const findAllUser = async () => {
    const user = await User.findAll({
        order: [['id','desc']]
    });
    return user;
}

const creatUser = async (body) => {
    const user = await User.create({
        fullname: body.fullname
    });
    return {
        message: 'เพิ่มข้อมูลสำเร็จ',
        status:200,
        data:user
    }
}