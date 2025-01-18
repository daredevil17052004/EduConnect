import User from "./user";
import Session from "./session";

User.hasMany(Session,{foreignKey:"userId"});
Session.belongsTo(User,{foreignKey:"userId"});

export default {User,Session};