import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize";

const Session = sequelize.define("Session",{
    id:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    expires:{
        type:DataTypes.DATE,
        allowNull:false
    }
})

export default Session;