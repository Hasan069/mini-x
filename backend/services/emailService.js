import nodemailer from "nodemailer";

//This code for is mailtrap
// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASSWORD,
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const sendWelcomeEmail = async (userEmail, username) => {
  try {
    const mailOptions = {
      from: '"x-mini" <noreply@x-mini.com>',
      to: userEmail,
      subject: "Welcome to my App!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to X, ${username}! 🎉</h2>
          <p>Thank you for joining us! We're excited to have you on board.</p>
          <p>Best regards,<br>Team X.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent:", info.messageId);
    console.log("Sent to ", userEmail);
    return true;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
};

export default sendWelcomeEmail;
// module.exports = { sendWelcomeEmail };
