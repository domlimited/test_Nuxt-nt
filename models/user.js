import { DataTypes } from 'sequelize';
import sequelize from '../db/MySql';

const User = sequelize.define('User', {
  // Model attributes are defined here
  fullname: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false,
  tableName: "users"
});

export default User;