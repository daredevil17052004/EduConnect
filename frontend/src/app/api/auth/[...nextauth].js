import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import sequelize from "@/lib/sequelize";
import {User} from '../../../models/user';

export default NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"text"},
                password : {label:"Password",type:"password"}
            },
            async authorize(credentials){
                const user = await User.findOne({where:{email:credenetials.email}});
                if(user && bcrypt.compareSync(credentials.password,user.password)){
                    return{id:user.id,name:user.name,email:user.email,role:user.role};
                }
                return null;
            }
        })
    ],
    adapter: SequelizeAdapter(sequelize),
    session:{
        strategy:"database",
    },
    callbacks:{
        async session({session,token}){
            session.user.role = token.role;
            return session;
        },
        async jwt({token,user}){
            if(user){
                token.role = user.role;
            }
            return token;
        }
    },
    pages:{
        signIn:"auth/login",
    }
})
