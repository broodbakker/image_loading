import PhotoGallery from 'react-photo-gallery';
//api
import { getImages } from "./api/images"
//components
import { Header } from "../components/header"
//typescipt
import type { ResourceApiResponse } from "cloudinary";
//functions
import { createImageGallaryData, openWidget } from '../util/functions'
//constants
const constants = {
  cloud_folder: "image_loading_folder",
}

interface IHome {
  resources: ResourceApiResponse["resources"]
}

export default function Home({ resources }: IHome) {
  return (
    <div>
      <Header />
      <PhotoGallery photos={createImageGallaryData(resources)} />;
    </div>
  )
}

export async function getStaticProps() {
  const { resources } = await getImages(constants.cloud_folder);

  return {
    props: {
      resources
    },
    revalidate: 10
  }
}