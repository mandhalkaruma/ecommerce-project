import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

const ContactDetail = () => {

    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/contact");

            console.log(res.data);

            if (res.data.success) {
                setContacts(res.data.contactMsg);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch contacts");
        }
    }

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">
                Customer Emails
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {contacts?.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-md hover:shadow-lg transition"
                    >

                        {/* From */}
                        <p className="text-sm text-gray-400">
                            From:
                        </p>
                        <h3 className="text-md font-semibold text-white">
                            {item.name} ({item.email})
                        </h3>

                        {/* Subject */}
                        <p className="text-sm text-gray-400 mt-3">
                            Subject:
                        </p>
                        <p className="text-sm text-purple-300 font-medium">
                            {item.subject}
                        </p>

                        {/* Message */}
                        <p className="text-sm text-gray-400 mt-3">
                            Message:
                        </p>
                        <p className="text-sm text-gray-300">
                            {item.body}
                        </p>

                        {/* Date */}
                        <p className="text-xs text-white-500 mt-3">
                            {new Date(item.createdAt).toLocaleDateString()}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2 mt-4">
                            <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm">
                                Reply
                            </button>

                            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">
                                Resolved
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );

}

export default ContactDetail
