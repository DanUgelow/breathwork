import { sendEmail } from "@/lib/sendgrid";

export const runtime = "edge";

const sendEmailAPI = async (req, res) => {
  const payload = req.body;

  try {
    await sendEmail(payload);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an issue sending your message" });
  }
};

export default sendEmailAPI;
