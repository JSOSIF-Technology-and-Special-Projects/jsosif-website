"use client";
import hiringbanner from "../assets/hiringbanner.png";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { getFileSizeString, getFileTypeClass } from "@/utils/dropzoneUtils";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hiring() {
	const [formData, setFormData] = useState<{
		name: string;
		email: string;
		message: string;
		file: File | null;
	}>({
		name: "",
		email: "",
		message: "",
		file: null,
	});

	// @ts-ignore
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// const handleFileChange = (acceptedFiles: File[]) => {
	// 	setFormData((prev) => ({ ...prev, file: acceptedFiles[0] || null }));
	// };

	// @ts-ignore
	const handleSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		emailjs
			.send(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				templateParams,
				"YOUR_USER_ID"
			)
			.then((response) => {
				console.log(
					"Email sent successfully:",
					response.status,
					response.text
				);
				alert("Application submitted successfully!");
			})
			.catch((error) => {
				console.error("Failed to send email:", error);
				alert("Failed to send application. Please try again.");
			});
	};

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="bg-white min-h-[calc(100vh - 7rem)] flex flex-col w-full pb-12">
			{/* Banner Section */}
			<Image
				src={hiringbanner}
				alt="Hiring Banner"
				style={{ height: scrollPosition / 8 + 400 }}
				className={`object-cover -z-0 ${
					scrollPosition > 0 ? "fixed" : "absolute"
				} ${scrollPosition > 400 && "hidden"}`}
			/>
			{/* Overlay Content */}
			<div className="flex items-start justify-center mt-10 mb-64 z-10">
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
						<h1 className="text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
							Hiring
						</h1>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="w-screen bg-primary h-0.5 mb-1" />
						<div className="w-screen bg-primary h-1" />
					</div>
				</div>
			</div>

			{/* Hiring Section */}
			<div className="relative z-10 bg-white flex justify-center py-12 px-72">
				<div className="relative items-start gap-8 px-8 2xl:px-32">
					<div className="mb-12">
						<h1 className="text-4xl font-serif text-left text-gray-700 mb-4">
							Why JSOSIF
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Facilis quo libero neque assumenda repudiandae
							tempora, corrupti quis quisquam dolore a velit
							facere exercitationem culpa porro vero. Perferendis
							atque sint ab!
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-4xl font-serif text-left text-gray-700 mb-4">
							What you will bring
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Quia ratione perspiciatis obcaecati reiciendis
							inventore facilis delectus repellat assumenda qui
							soluta libero officia doloribus molestias, mollitia
							ipsum ipsam suscipit aut quibusdam.
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-4xl font-serif text-left text-gray-700 mb-4">
							Something else?
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Et aliquid totam dignissimos amet consequuntur
							voluptatem corporis, facere a modi! Magni eius
							molestias inventore facere laborum numquam adipisci
							repellendus, quae facilis.
						</p>
					</div>
				</div>
			</div>

			{/* Form section */}
			<div>
				<h1 className="text-6xl font-serif italic text-center text-primary mb-8">
					Apply Now
				</h1>
				<form
					onSubmit={handleSubmit}
					className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							Name
							<span className="text-primary">*</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							UWindsor Email
							<span className="text-primary">*</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700"
						>
							Message (optional)
						</label>
						<textarea
							id="message"
							name="message"
							rows={6}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Resume (optional)
						</label>
						<Dropzone
							onDrop={(acceptedFiles) =>
								console.log(acceptedFiles)
							}
						>
							{({ getRootProps, getInputProps }) => (
								<section className="border border-dashed border-gray-300 shadow rounded-lg p-6">
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<div className="flex flex-col items-center justify-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="32"
												height="32"
												viewBox="0 0 24 24"
												className="text-gray-600"
											>
												<path
													fill="currentColor"
													d="m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"
												/>
											</svg>
											<p className="font-semibold">
												Choose a file or drag & drop it
												here.
											</p>
											<p className="text-sm text-gray-400 italic">
												PDF, DOCX, JPEG, PNG, up to 5
												MB.
											</p>
											<span className="rounded px-2 font-semibold py-1 shadow border">
												Browse File
											</span>
										</div>
									</div>
								</section>
							)}
						</Dropzone>
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
