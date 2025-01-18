import bcrypt from 'bcrypt';
import {User} from '../models';

const createUser = async(email, password, name, role = 'user')=>{
    try{
        const hashedPassword = bcrypt.hashSync(password,10);
        const user = await User.create({email,password:hashedPassword,name,role});
        return user;
    }catch(error){
        throw new Error("Error creating user: " + error.message);
    }
}

export default {createUser};