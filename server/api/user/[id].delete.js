import User from "../../../models/user";

export default defineEventHandler( async (event) => {
    const id = event.context.params.id;
    await User.destroy({
        where: {
          id: id
        }
      });

    return {
        message: 'ลบข้อมูลสำเร็จ',
        status:200
    }
});