import Link from "next/link"
import { contactType } from "../_types/contact"
import { FiEdit } from "react-icons/fi"
import DeleteButton from "./DeleteButton"
import { deleteContactAction } from "../actions/contact"

export const ContactList = ({ contacts }: { contacts: contactType[] }) => {
    return <div className="space-y-4">
        {contacts.map((itm) => (
            <div className="p-4 border rounded-lg" key={itm?.id}>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold">{itm?.name}</h2>
                        <p>{itm.email}</p>
                    </div>
                    <div className="flex items-center self-center gap-3">
                        <Link href={`/contact/edit/${itm?.id}`} className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <FiEdit className="text-blue-600"/>
                            Edit
                        </Link>
                        <DeleteButton action = {deleteContactAction} contact={itm} />
                    </div>
                </div>
            </div>
        ))}
    </div>
}