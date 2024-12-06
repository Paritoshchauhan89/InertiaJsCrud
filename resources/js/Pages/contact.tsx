import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import { useState, ChangeEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    // Handle input change with event type
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // e.target.name will always be a string
        });
    };

    return (
        <>
        <Head title='Contact Us '/>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>

                <form>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            // rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button type="button" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Contact;
