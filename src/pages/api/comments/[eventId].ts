/* eslint-disable prefer-destructuring */
import { NextApiRequest, NextApiResponse } from 'next';

const commentHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { name, email, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      name,
      email,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: 'Added comment', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Francis', text: 'A first comment!' },
      { id: 'c2', name: 'Sophie', text: 'A second comment!' },
    ];

    res.status(201).json({ comments: dummyList });
  }
};

export default commentHandler;
