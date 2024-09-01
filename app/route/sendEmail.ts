import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type EmailData = {
  to: string;
  subject: string;
  text: string;
};

type ApiResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { to, subject, text }: EmailData = req.body;

    console.log("Sending email to:", req.body);

    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
        to,
        subject,
        text,
        html: `<p>${text}</p>`,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
