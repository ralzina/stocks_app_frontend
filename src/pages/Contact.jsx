import Header from '../components/Header'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_lkmelui',
                'template_6kroukr',
                formData,
                '_ZLu-H_O_UZ0aEsuR'
            );
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); 
        } catch (error) {
            console.error(error);
            alert('There was an error sending your message. Please try again.');
        }
    }

    return (
        <>
            <Header />
            <section className="min-h-screen pt-30 px-4 sm:px-6 bg-gray-100">
                <div className="h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-light leading-snug text-gray-700">
                        Contact
                    </h1>
                </div>

            <section className="px-4 py-12 max-w-2xl mx-auto text-gray-700">
                    <p className="text-center mb-6 text-md sm:text-lg font-light">
                        Feel free to send me a message, and I will get back to you as soon as possible!
                    </p>

                        <form onSubmit={handleSubmit} id="contact-form" className="space-y-6 bg-gray-50 p-10 rounded-lg shadow-md">
                                <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium">Your Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder=">_"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                                />
                                </div>

                                <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium">Your Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=">_"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                                />
                                </div>

                                <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium">Your Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder=">_"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                                ></textarea>
                                </div>

                                <button
                                type="submit"
                                className="w-full bg-gray-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition duration-400 cursor-pointer"
                                >
                                Send Message
                                </button>
                        </form>
                    <div className="mt-10 mb-16"></div>
                </section>
            </section>
            <ScrollToTop />
        </>
    )
}