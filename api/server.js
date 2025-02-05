import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

// Debug logs
console.log('✅ Server is starting...');

// Check if required environment variables exist
if (!process.env.HIRING_EMAIL || !process.env.GMAIL_PASS) {
    console.error('❌ Missing required environment variables. Ensure HIRING_EMAIL and GMAIL_PASS are set.');
    process.exit(1);
}

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// ✅ Configure Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.HIRING_EMAIL,  // Your Gmail address
        pass: process.env.GMAIL_PASS,  // App Password
    },
});

// API Route to handle job applications
app.post('/hiring', upload.single('file'), async (req, res) => {
    try {
        console.log('📩 New application received');

        const { name, email, message } = req.body;
        const file = req.file;

        console.log(`📌 Name: ${name}, Email: ${email}, Message: ${message}, File: ${file ? file.originalname : 'No file received'}`);

        if (!name || !email) {
            console.error('❌ Missing fields:', { name, email, file });
            return res.status(400).json({ message: 'Name and email are required' });
        }

        // Email configuration
        const mailOptions = {
            from: process.env.HIRING_EMAIL,
            to: process.env.HIRING_EMAIL, // Receiving email
            subject: `New Job Application from ${name}`,
            text: `Name: ${name}\nUWindsor Email: ${email}\nMessage: ${message}\nResume attached.`,
            attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent: ${info.response}`);

        if (file) fs.unlinkSync(file.path);
        console.log('🗑️ File deleted after email sent.');

        return res.status(200).json({ message: 'Application submitted successfully!' });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email. Check server logs for details.' });
    }
});

// Start Express server
const PORT = process.env.PORT || 5008;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
