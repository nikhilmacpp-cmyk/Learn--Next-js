"use server"

import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { DeleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const LoginAction = async (formData: FormData) => {
    console.log('formData', formData)
    try {
        const email = formData?.get("email");
        const password = formData.get("password");
        if (!email || !password) {
            throw new Error("Email or password missing");
        }

        const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
        const user: UserType = response?.data[0];
        if (!user) {
            throw new Error("Invalid Credentials");
        }
        await setSession({name:user.name,email:user.email,id:user.id})

    } catch (err) {
        throw new Error("Failed to Login")
    }
    // TODO: set cookie/session here if needed

    redirect("/contact")
}

export const LogoutAction = async () => {
    await DeleteSession()
    redirect('/login')
}