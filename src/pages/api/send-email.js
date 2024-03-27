export const runtime = "edge";

const sendEmailAPI = async (req) => {
  const body = await req.json();
  const { from, text, recaptchaToken } = body;

  try {
    const siteVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    const verifyRes = await fetch(siteVerifyURL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const verifyData = await verifyRes.json();

    if (verifyData?.success && verifyData?.score > 0.5) {
      const msg = {
        personalizations: [
          {
            to: [{ email: "dan.ugelow@gmail.com" }],
            subject: `From ${from}`,
          },
        ],
        content: [{ type: "text/plain", value: text }],
        from: { email: "vitalflowbreathwork@gmail.com" },
        reply_to: { email: from },
      };

      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        body: JSON.stringify(msg),
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      return res;
    } else {
      return new Response(new Blob(), { status: 500, ok: false });
    }
  } catch (error) {
    return error;
  }
};

export default sendEmailAPI;
