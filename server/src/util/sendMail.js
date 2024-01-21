import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config({});
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (options) => {
  const { data, error } = await resend.emails.send({
    from: process.env.SMPT_MAIl,
    to: options.email,
    subject: options.subject,
    html: `<p>Click <a href="${options.activeLink}">here</a>!</p>`,
  });
  if (error) {
    return console.log({ error });
  }

  console.log({ data });
};
