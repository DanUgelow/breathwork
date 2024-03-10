import sgMail from "@sendgrid/mail";

export const sendEmail = async ({ from, text }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "vitalflowbreathwork@gmail.com",
    to: "dan.ugelow@gmail.com",
    subject: `Website - From ${from}`,
    text,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw error;
  }
};

export const runtime = "edge";
