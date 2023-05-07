// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string,
  title: string,
  status: boolean,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(
    [{
      id: "1",
      title: "Task 1",
      status: false,
    },
    {
      id: "2",
      title: "Task 2",
      status: true,
    }]
  )
}
