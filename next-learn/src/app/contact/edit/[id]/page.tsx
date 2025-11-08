import ContactForm from "@/app/_components/ContactForm"
import { updateContactAction } from "@/app/actions/contact";
import { GetContactById } from "@/app/api/contact"

const EditContactPage = async ({ params }: { params: Promise<{ id: string }>; }) => {
    const {id} = await params;
    const contact = await GetContactById(id)
    return <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Edit contact</h1>
        <ContactForm action={updateContactAction} contact={contact} />
    </div>
}
export default EditContactPage