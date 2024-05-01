// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailjs from '@emailjs/nodejs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormValues } from '@/interfaces';

type Data = {
  message: string;
};

const EMAIL_SERVICE = process.env.EMAIL_SERVICE || '';
const EMAIL_TEMPLATE = process.env.EMAIL_TEMPLATE || '';
const EMAIL_PUBLIC_KEY = process.env.EMAIL_PUBLIC_KEY || '';
const EMAIL_PRIVATE_KEY = process.env.EMAIL_PRIVATE_KEY || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body) as ContactFormValues;
      // @ts-ignore
      await emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, data, {
        publicKey: EMAIL_PUBLIC_KEY,
        privateKey: EMAIL_PRIVATE_KEY,
      });
      res.status(201).json({ message: 'Email sent successfully' });
    } catch (errorObj) {
      console.error({ errorObj: errorObj });
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(404);
    res.redirect('/404');
  }
}
