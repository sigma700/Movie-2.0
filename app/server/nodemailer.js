import nodemailer from "nodemailer";
import Contacts from "../routes/contact";

// Create a transporter using SMTP (example with Gmail)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: "true",
  service: "gmail",
  auth: {
    user: "allankirimi65@gmail.com",
    pass: process.env.EMAIL_PASS, //correct this part
  },
});

export async function sendMail(to, subject, text) {
  const mailOptions = {
    to: `${email}`,
    from: "allankirimi65@gmail.com",
    subject: "Check this out fam it works",
    text: "Hello fam",
  };

  //cheking for eerrors

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
