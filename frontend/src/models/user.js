import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const User = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false        
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"user"
    }
    },
    {
        tableName : 'users',
        timestamps:true
    }

)

export default User;
