
"use client"
import { useActionState, useEffect } from "react";
import { contactType } from "../_types/contact"
import { useRouter } from "next/navigation";

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: contactType;
}
const ContactForm = ({ action, contact }: ContactFormProps) => {
    const router = useRouter();
    const [state, formAction] = useActionState(action, null)
    useEffect(() => {
        if (state?.sucess) {
            router.push("/contact")
        }
    }, [state, router])

    return <form action={formAction} className="space-x-4">
        <div>
            <input type="hidden" name="id" value={contact?.id}/>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                type="text"
                placeholder="Enter your name"
                name="name"
                defaultValue={contact?.name || ''}
                required />
        </div>
        <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                type="email"
                placeholder="Enter your email"
                name="email"
                defaultValue={contact?.email || ''}
                required />
        </div>
        {state?.error && (
            <div className="text-red-500 text-sm">
                   {state?.error} 
            </div>
        )}
        <button type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Save</button>
    </form>
}
export default ContactForm