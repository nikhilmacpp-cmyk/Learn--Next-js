import { cookies } from "next/headers";
import { UserType } from "../_types/user";
import path from "path";
import { promises } from "dns";

// set session
export const setSession = async(userData:UserType) =>{
    (await cookies()).set("session",JSON.stringify(userData),{
        httpOnly:true,
        secure:process.env.NODE_ENV=== "production",
        maxAge:60*60*24,
        path:"/",
    })
}

// Get session
export const GetSession = async ():Promise <UserType | null> =>{
   const session = (await cookies()).get("session")?.value;
   if(!session){
    return null
   }else{
    const user = JSON.parse(session) as UserType;
    return user
   }
}

// Delete session
export const DeleteSession = async () =>{
    const cookieStore = await cookies();
    cookieStore.delete("session")
}