"use server";

import nodemailer from "nodemailer";

export async function submitApplication(formData: FormData) {
    try {

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;


        if (!name || !email) {
            return { success: false, message: "Name and email are required" };
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HIRING_EMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });

        // convert to buffer if file is present
        const attachments = [];
        if (file) {
            const fileBuffer = Buffer.from(await file.arrayBuffer()); // Convert file to a buffer
            attachments.push({
                filename: file.name,
                content: fileBuffer, // Attach buffer directly
            });
        }

        //email options
        const mailOptions = {
            from: process.env.HIRING_EMAIL,
            to: process.env.HIRING_EMAIL,
            subject: `New Job Application from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nResume attached.`,
            attachments,
        };

        //sends
        const info = await transporter.sendMail(mailOptions);

        return { success: true, message: "Application submitted successfully!" };

    } catch (error) {
        return { success: false, message: "Error sending email. Check server logs for details." };
    }
}
