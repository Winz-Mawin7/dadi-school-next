// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/hello

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};
