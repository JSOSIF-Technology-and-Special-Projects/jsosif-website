"use client";
import hiringbanner from "../assets/hiringbanner.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { getFileSizeString, getFileTypeClass } from "@/utils/dropzoneUtils";
import { ToastContainer, toast, Slide } from "react-toastify";
import { submitApplication } from "@/app/actions/hiring";
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

	const [fileTypeClass, setFileTypeClass] = useState<string>();
	const [sending, setSending] = useState(false);

	const notifyError = (msg: string) =>
		toast.error("Error: " + msg, {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Slide,
		}); // Function to notify error

	const notifySuccess = (msg: string) =>
		toast.success("Success: " + msg, {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Slide,
		}); // Function to notify success

	useEffect(() => {
		console.log(fileTypeClass);
	}, [fileTypeClass]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// const handleFileChange = (acceptedFiles: File[]) => {
	// 	setFormData((prev) => ({ ...prev, file: acceptedFiles[0] || null }));
	// };

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSending(true);

		if (!formData.name || !formData.email) {
			notifyError("Name and email are required!");
			return;
		}

		const formDataToSend = new FormData();
		formDataToSend.append("name", formData.name);
		formDataToSend.append("email", formData.email);
		formDataToSend.append("message", formData.message);
		if (formData.file) formDataToSend.append("file", formData.file);

		console.log(formData);
		console.log(formDataToSend);
		const res = await submitApplication(formDataToSend);
		if (res.success) {
			notifySuccess("Application submitted successfully!");
		} else {
			console.error("Error:", res.message);
			notifyError("Theres been an error submiting your application.");
		}
		setSending(false);
	};

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const deleteFile = () => {
		setFormData((prevForm) => {
			return {
				...prevForm,
				file: null,
			};
		});
	};

	return (
		<div className="bg-white min-h-[calc(100vh - 7rem)] flex flex-col w-full pb-12">
			<div className="relative z-[999999]">
				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
				/>
			</div>
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
			<div className="flex items-start justify-center mt-10 mb-20 sm:mb-64 z-10">
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex flex-col items-center justify-center w-fit bg-primary opacity-90">
						<h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white px-16 py-2 rounded-sm shadow-md">
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
			<div className="relative z-10 bg-white flex justify-center py-12 px-4 sm:px-20 md:px-40 lg:px-60 xl:px-72">
				<div className="relative items-start gap-8 px-8 2xl:px-32 xl:max-w-[80rem]">
					<div className="mb-12">
						<h1 className="text-3xl sm:text-4xl font-serif text-left text-gray-700 mb-4">
							Why JSOSIF
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Facilis quo libero neque assumenda repudiandae
							tempora.
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-3xl sm:text-4xl font-serif text-left text-gray-700 mb-4">
							What you will bring
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Quia ratione perspiciatis obcaecati reiciendis
							inventore.
						</p>
					</div>
					<div className="mb-12">
						<h1 className="text-3xl sm:text-4xl font-serif text-left text-gray-700 mb-4">
							Something else?
							<hr className="w-full mx-auto mt-1" />
						</h1>
						<p className="text-lg text-gray-700 leading-relaxed">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Et aliquid totam dignissimos amet
							consequuntur.
						</p>
					</div>
				</div>
			</div>

			{/* Form section */}
			<div>
				<h1 className="text-4xl sm:text-6xl font-serif italic text-center text-primary mb-8">
					Apply Now
				</h1>
				<form
					onSubmit={handleSubmit}
					className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg sm:shadow-lg"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
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
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							UWindsor Email{" "}
							<span className="text-primary">*</span>
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
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Resume (optional)
						</label>
						{!formData.file ? (
							<Dropzone
								onDrop={(acceptedFiles) => {
									console.log(acceptedFiles);
									setFormData({
										...formData,
										file: acceptedFiles[0],
									});
									setFileTypeClass(
										getFileTypeClass(acceptedFiles[0].type)
									);
								}}
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
													Choose a file or drag & drop
													it here.
												</p>
												<p className="text-sm text-gray-400 italic">
													PDF, DOCX, JPEG, PNG, up to
													5 MB.
												</p>
												<span className="rounded px-2 font-semibold py-1 shadow border">
													Browse File
												</span>
											</div>
										</div>
									</section>
								)}
							</Dropzone>
						) : (
							<div className="flex items-center justify-between w-full h-fit p-2 border rounded-lg bg-white">
								<div className="flex">
									<div className="relative">
										{/* <File class="w-14 h-14 text-gray-300" /> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="56"
											height="56"
											viewBox="0 0 21 21"
											className="text-gray-300"
										>
											<g
												fill="none"
												fillRule="evenodd"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M16.5 15.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2" />
												<path d="M11.5 3.5v3a2 2 0 0 0 2 2h3" />
											</g>
										</svg>
										<span
											style={{
												background: fileTypeClass,
											}}
											className={`absolute capitalize text-white rounded-lg p-1 top-1/3 left-1 text-[0.6rem]`}
										>
											{formData.file.type
												?.split("/")?.[1]
												?.toUpperCase() || "Other"}
										</span>
									</div>
									<div className="flex flex-col gap-1 justify-center">
										<h1 className="font-medium text-sm">
											{formData?.file?.name}
										</h1>
										<div className="flex gap-2 items-center">
											{formData?.file?.size && (
												<p className="text-xs text-accent-content">
													{getFileSizeString(
														formData.file.size
													)}
												</p>
											)}
											<span className="w-4 h-4 flex items-center justify-center bg-green-600 rounded-full">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 24 24"
													className="text-white"
												>
													<path
														fill="currentColor"
														d="m10 15.17l9.192-9.191l1.414 1.414L10 17.999l-6.364-6.364l1.414-1.414z"
													/>
												</svg>
											</span>
											<p className="text-white text-xs">
												Completed
											</p>
										</div>
									</div>
								</div>
								<button
									type="button"
									onClick={() => {
										deleteFile();
									}}
									className="mr-3 p-1 rounded-full hover:text-red-700 text-gray-700 transition-all"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4zM6 6v14h12V6zm3 3h2v8H9zm4 0h2v8h-2z"
										/>
									</svg>
								</button>
							</div>
						)}
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="w-24 h-12 bg-primary text-white rounded-md active:scale-95 transition-all mx-auto flex items-center justify-center"
						>
							{!sending ? (
								"Submit"
							) : (
								<div
									className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
									role="status"
								>
									<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
										Sending...
									</span>
								</div>
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
