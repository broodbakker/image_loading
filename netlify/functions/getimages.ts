import { Handler } from "@netlify/functions";
import cloudinary from "cloudinary"
//typescipt
import type { ResourceApiResponse } from "cloudinary";
//constants
// import { constants } from "../../util/constants"

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// export const getImages = async (tag: string) => {
//   const { resources }: ResourceApiResponse = await cloudinary.v2.search.expression(
//     `folder:${tag}/*` // add your folder
//   ).sort_by('public_id', 'desc').max_results(30).execute()

//   return  resources
// }


const handler: Handler = async (event, context) => {



  try {

    return {
      statusCode: 200,
      body: JSON.stringify(4),

    }
  } catch (error: any) {
    return { statusCode: 500, body: error.toString() }
  }

};

export { handler };