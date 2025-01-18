import hiringbanner from '../assets/hiringbanner.png';
import Image from 'next/image';

export default function Hiring() {
    return (
        <div className="px-8 py-12">
            {/* Banner Section */}
            <div className="relative">  
                <Image
                    src={hiringbanner}
                    alt="Hiring Banner"
                    className="w-full h-[400px] object-cover"
                /> 
                {/* Overlay Content */}
                <div className="absolute top-0 left-0 right-0 flex items-start justify-center mt-4">
                    <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
                        Hiring
                    </h1>
                </div>
            </div>

            {/* Hiring Section */}
            <div>
                <div className="relative items-start gap-8 px-40 2xl:px-72">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-left text-gray-700 mb-4">
                            Why JSOSIF
                            <hr className="w-full mx-auto"/>
                        </h1>
                        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quo libero neque assumenda repudiandae tempora, corrupti quis quisquam dolore a velit facere exercitationem culpa porro vero. Perferendis atque sint ab!</p>
                        
                    </div>
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-left text-gray-700 mb-4">
                            What you will bring
                            <hr className="w-full mx-auto"/>
                        </h1>
                        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ratione perspiciatis obcaecati reiciendis inventore facilis delectus repellat assumenda qui soluta libero officia doloribus molestias, mollitia ipsum ipsam suscipit aut quibusdam.</p>
                        
                    </div>
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-left text-gray-700 mb-4">
                            Something else?
                            <hr className="w-full mx-auto"/>
                        </h1>
                        <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquid totam dignissimos amet consequuntur voluptatem corporis, facere a modi! Magni eius molestias inventore facere laborum numquam adipisci repellendus, quae facilis.</p>
                    </div>
                </div>
            </div>
            {/* Form section */}
            <div>
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
                    Apply Now
                </h1>
                <form className="max-w-lg mx-auto space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                           UWindsor Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                            Upload File
                        </label>
                        <div className="mt-1 flex items-center">
                            <label
                                htmlFor="file"
                                className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Choose File
                            </label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                className="hidden"
                            />
                            <span className="ml-3 text-gray-500">No file chosen</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >   
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
