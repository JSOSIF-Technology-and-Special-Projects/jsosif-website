"use client";
import hiringbanner from "../assets/hiringbanner.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (acceptedFiles: File[]) => {
		setFormData((prev) => ({ ...prev, file: acceptedFiles[0] || null }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formData.name || !formData.email) {
			alert("Name and email are required!");
			return;
		}

		const formDataToSend = new FormData();
		formDataToSend.append("name", formData.name);
		formDataToSend.append("email", formData.email);
		formDataToSend.append("message", formData.message);
		if (formData.file) formDataToSend.append("file", formData.file);

		try {
			const response = await fetch("http://localhost:5008/hiring", {
				method: "POST",
				body: formDataToSend,
			});

			if (response.ok) {
				alert("Application submitted successfully!");
				setFormData({ name: "", email: "", message: "", file: null });
			} else {
				alert("Failed to submit application.");
			}
		} catch (error) {
			console.error("Error submitting application:", error);
			alert("An error occurred. Please try again.");
		}
	};

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="bg-white min-h-[calc(100vh - 7rem)] flex flex-col w-full pb-12">
			{/* Banner Section */}
			<Image
				src={hiringbanner}
				alt="Hiring Banner"
				style={{ height: scrollPosition / 8 + 400 }}
				className={`object-cover -z-0 ${scrollPosition > 0 ? "fixed" : "absolute"} ${
					scrollPosition > 400 && "hidden"
				}`}
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
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quo libero neque assumenda repudiandae tempora.
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-4xl font-serif text-left text-gray-700 mb-4">
							What you will bring
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ratione perspiciatis obcaecati reiciendis inventore.
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-4xl font-serif text-left text-gray-700 mb-4">
							Something else?
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquid totam dignissimos amet consequuntur.
						</p>
					</div>
				</div>
			</div>

			{/* Form section */}
			<div>
				<h1 className="text-6xl font-serif italic text-center text-primary mb-8">Apply Now</h1>
				<form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">
							Name <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							UWindsor Email <span className="text-primary">*</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-700">
							Message (optional)
						</label>
						<textarea
							id="message"
							name="message"
							rows={6}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Resume (optional)</label>
						<Dropzone onDrop={handleFileChange}>
							{({ getRootProps, getInputProps }) => (
								<section className="border border-dashed border-gray-300 shadow rounded-lg p-6">
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<p className="text-center text-gray-500">Drag & drop a file, or click to select one</p>
									</div>
								</section>
							)}
						</Dropzone>
						{formData.file && <p className="mt-2 text-sm text-gray-500">{formData.file.name}</p>}
					</div>
					<div className="text-center">
						<button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
