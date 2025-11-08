"use server"
import { revalidatePath } from "next/cache";
import { CreatContact, DeleteContact, updateContact } from "../api/contact";
import { GetSession } from "../_lib/session";
import { contactType } from "../_types/contact";

export const deleteContactAction = async (prevState:any,formData:FormData) =>{
    const id = formData.get('id') as string
    try{
        await DeleteContact(id)
        revalidatePath("/contact")
        return {sucess:true}
    }catch(err){
        console.log('err',err)
        return {error:"Failed to delete contact"}
    }
}
export const createContactAction = async (prevState:any,formData:FormData) =>{
    if(!formData){
        return {error:"FormData missing"}
    }
    const user = await GetSession();
    if(!user){
        return {error:"user missing"}
    }
    const newContact: contactType = {
        name:formData.get("name") as string,
        email:formData.get("email") as string,
        userid:user.id
    }

    try{
        await CreatContact(newContact);
        revalidatePath("/contact");
        return {sucess : true}
    } catch(err){
        console.log('err',err)
        return {error:"Error to create contact"}
    }
}
export const updateContactAction = async (prevState:any,formData:FormData) =>{
    const id = formData.get("id") as string;
    const user = await GetSession();
    if(!user){
        return {error:"user missing"}
    }
    const updatedContact: contactType = {
        name:formData.get("name") as string,
        email:formData.get("email") as string,
        userid:user.id
    }

    try{
        await updateContact(id,updatedContact);
        revalidatePath("/contact");
        return {sucess : true}
    } catch(err){
        console.log('err',err)
        return {error:"Error to create contact"}
    }
}