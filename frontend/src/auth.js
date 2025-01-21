import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';


export const{
    handlers:{GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session : {
        strategy : "jwt",
    },
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET,
            authorization : {
                params : {
                    prompt : "consent",
                    access_type : "offline",
                    response_type : "code"
                }
            }
        }),
        CredentialsProvider({
            name : "Credentials",
            credentials :{
                username : {label : 'Username', type : 'text'},
                password : {label : 'Password', type : "password"},   
            },
            async authorize (credentials){
                const res = await fetch("http://localhost:3000/auth/login", {
                    method : 'POST' , 
                    body : JSON.stringify({username : credentials?.username, password : credentials?.password}),
                    headers : {'Content-Type' : 'appilcation/json'}
                });
                const user = await res.json();

                if(user && user.token){
                    return{...user, token : user.token};
                }else{
                    return null;

                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}){
            if(user){
                token.token = user.token;
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.token = token.token;
            }
            return session;
        }
    },
    secret : process.env.NEXTAUTH_SECRET,
});