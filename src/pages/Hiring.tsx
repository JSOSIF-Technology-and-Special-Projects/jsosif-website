"use client";
import hiringbanner from '../assets/hiringbanner.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Hiring() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.file) {
            alert("❌ Please fill all fields and attach a resume.");
            return;
        }

        console.log('📩 Submitting application:', formData);

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('file', formData.file);
    
        try {
            const response = await fetch('http://localhost:5008/hiring', { 
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('✅ Application submitted successfully!');
                setFormData({ name: '', email: '', file: null }); // Reset form
            } else {
                alert('❌ Failed to submit application.');
            }
        } catch (error) {
            console.error('❌ Error:', error);
            alert('❌ An error occurred. Please try again.');
        }
    };

    return (
        <div className="px-8 py-12">
            <div className="relative">  
                <Image src={hiringbanner} alt="Hiring Banner" className="w-full h-[400px] object-cover" /> 
                <div className="absolute top-0 left-0 right-0 flex items-start justify-center mt-4">
                    <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
                        Hiring
                    </h1>
                </div>
            </div>

            <div className="mt-12">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
                    Apply Now
                </h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">UWindsor Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Resume</label>
                        <input type="file" id="file" name="file" className="mt-1 block w-full" onChange={handleFileChange} required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
