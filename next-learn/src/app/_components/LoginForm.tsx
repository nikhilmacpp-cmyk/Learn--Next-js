"use client"

import { LoginAction } from "../actions/auth"

const LoginForm = () => {
    return <form action={LoginAction} className="space-x-4">
        <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                type="email"
                placeholder="Enter your email"
                name="email"
                required />
        </div>
        <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                type="password"
                placeholder="Enter your password"
                name="password"
                required />
        </div>
        <button type="submit"
            className="w-full mt-3 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
        font-medium text-white bg-blue-600 hover:bg-blue-500">
            Login</button>
    </form>
}
export default LoginForm