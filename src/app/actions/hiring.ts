"use server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { writeFile } from "fs/promises";

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
                user: process.env.HIRING_EMAIL,  // Your Gmail address
                pass: process.env.GMAIL_PASS,   // App Password
            },
        });

        // File handling (if file exists)
        const attachments = [];
        let filePath = "";
        if (file) {
            // Save file temporarily
            filePath = path.join(process.cwd(), "uploads", file.name);
            const buffer = Buffer.from(await file.arrayBuffer());
            await writeFile(filePath, buffer);
            
            attachments.push({
                filename: file.name,
                path: filePath,
            });
        }

        // Email configuration
        const mailOptions = {
            from: process.env.HIRING_EMAIL,
            to: process.env.HIRING_EMAIL, // Receiving email
            subject: `New Job Application from ${name}`,
            text: `Name: ${name}\nUWindsor Email: ${email}\nMessage: ${message}\nResume attached.`,
            attachments,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent: ${info.response}`);

        // Delete file after email is sent
        if (filePath) {
            await fs.unlink(filePath);
            console.log("🗑️ File deleted after email sent.");
        }

        return { success: true, message: "Application submitted successfully!" };

    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Error sending email. Check server logs for details." };
    }
}
