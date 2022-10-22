import User from "../../../models/user";
import { Op } from "sequelize";
export default defineEventHandler( async (event) => {
    // const query = useQuery(event);
    const { fullname } = useQuery(event);
    const user = await User.findAll({
        where: {
            fullname :{
                [Op.substring]: fullname
            }
        }
    });
    return user;

});