import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const newsletterHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    console.log(userEmail);
    res.status(201).json({ message: 'Signed up!' });
  }
};

export default newsletterHandler;
