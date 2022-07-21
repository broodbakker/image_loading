import cloudinary from "cloudinary"
// //typescipt
import type { NextApiRequest, NextApiResponse } from 'next'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const destroyImage = (public_id: string) => cloudinary.v2.uploader.destroy(public_id,
  (result) => { return result });


function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { result } = await destroyImage(req.body)

      res.status(200).json({
        statusCode: 200,
        message: result,
      });
    } catch (err) {
      reportError({ message: getErrorMessage(err) })

      res
        .status(500)
        .json({ statusCode: 500, message: 'something went wrong' });
    }
  }
}


// export const destroyImage = (public_id: string) => cloudinary.v2.uploader.destroy(public_id,
//   (result) => { console.log(result) });

