import axios from "axios"
import { contactType } from "../_types/contact";

const API_URL = "http://localhost:3001"

export const GetContacts = async (userId : string) => {
        const resp = await axios.get(`${API_URL}/contacts?userid=${userId}`);
        return resp.data
}

export const GetContactById = async (id : string) => {
        const resp = await axios.get(`${API_URL}/contacts/${id}`);
        console.log('resp.data',resp)
        return resp.data
}
export const CreatContact = async (contact:contactType) => {
        const resp = await axios.post(`${API_URL}/contacts`,contact);
        return resp.data
}
export const updateContact = async (id:string,contact:contactType) => {
        const resp = await axios.put(`${API_URL}/contacts/${id}`,contact);
        return resp.data
}
export const DeleteContact = async (id:string) => {
        const resp = await axios.delete(`${API_URL}/contacts/${id}`);
        return resp.data
}
