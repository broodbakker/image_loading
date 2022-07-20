import cloudinary from "cloudinary"
//typescipt
import type { ResourceApiResponse } from "cloudinary";


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const getImages = async (tag: string) => {
  //const { resources } = await cloudinary.v2.api.sub_folders(tag);

  const { resources }: ResourceApiResponse = await cloudinary.v2.search.expression(
    `folder:${tag}/*` // add your folder
  ).sort_by('public_id', 'desc').max_results(30).execute()

  return { resources }
}

