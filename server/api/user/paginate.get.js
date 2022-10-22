import User from "../../../models/user";

export default defineEventHandler( async (event) => {
    // const query = useQuery(event);
    const { page, pageSize } = useQuery(event);
    const user = await User.findAll({
        order: [['id','desc']],
        offset: Number(page - 1) * Number(pageSize),
        limit: Number(pageSize)
        
    });
    const totalRecord = await User.count();
    return {
        totalRecord: totalRecord,
        data: user

    };

});