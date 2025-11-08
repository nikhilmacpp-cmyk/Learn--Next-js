"use client"
import { useActionState } from "react";
import { contactType } from "../_types/contact"

type DeleteButtonProps = {
    action:(prevState:any,formData:FormData) => Promise<any>;
    contact?:contactType;
}

const DeleteButton = ({action,contact}:DeleteButtonProps) =>{
    const [stat,formAction] = useActionState(action,null)
    return  <form action={formAction} method="post">
        <input type="hidden" name="id" value={contact?.id}/>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" 
        onClick={(e)=>{
            if(!confirm("Are you sure you want to delete this contact")){
                e.preventDefault()

            }
        }}
        >Delete</button>
    </form>
}
export default DeleteButton