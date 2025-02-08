"use server";

import nodemailer from "nodemailer";

export async function submitApplication(formData: FormData) {
    try {
        console.log("📩 New application received");

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;

        console.log(`📌 Name: ${name}, Email: ${email}, Message: ${message}, File: ${file?.name || "No file received"}`);

        if (!name || !email) {
            console.error("❌ Missing fields:", { name, email, file });
            return { success: false, message: "Name and email are required" };
        }

        // ✅ Configure Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HIRING_EMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });

        // ✅ Convert file to a buffer (instead of saving it to disk)
        const attachments = [];
        if (file) {
            const fileBuffer = Buffer.from(await file.arrayBuffer()); // Convert file to a buffer
            attachments.push({
                filename: file.name,
                content: fileBuffer, // Attach buffer directly
            });
        }

        // ✅ Email configuration
        const mailOptions = {
            from: process.env.HIRING_EMAIL,
            to: process.env.HIRING_EMAIL,
            subject: `New Job Application from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nResume attached.`,
            attachments,
        };

        // ✅ Send email
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent: ${info.response}`);

        return { success: true, message: "Application submitted successfully!" };

    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Error sending email. Check server logs for details." };
    }
}
