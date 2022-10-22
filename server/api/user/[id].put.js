import User from "../../../models/user";

export default defineEventHandler( async (event) => {
    const id = event.context.params.id;
    const body = await useBody(event);

    const [affectedCount] = await User.update({ fullname: body.fullname }, {
        where: {
          id: id
        }
      });

    return {
        message: 'แก้ไขข้อมูลสำเร็จ',
        status:200,
        affectedCount:affectedCount

    }
});

