import PhotoGallery from 'react-photo-gallery';
//api
import { getImages } from "./api/images"
//components
import { Button, Flex, Text } from '@chakra-ui/react'
//typescipt
import type { ResourceApiResponse } from "cloudinary";
//functions
import { createImageGallaryData, openWidget } from '../util/functions'
//constants
const constants = {
  cloud_folder: "image_loading_folder",
}

const Header = () => {
  return (
    <Flex
      px="4"
      py="4"
      justify="space-between"
    >
      <Text
        as="div"
        fontSize="xl"
        fontWeight="bold"
      >
        <span
          role="img"
        >
          🏆
        </span>
        <span
          role="img"
        >
          🌟
        </span>
        loading images
      </Text>
      <Flex align="end">
        <Button type="button" variant='outline' onClick={openWidget} colorScheme='blue'>Upload Image</Button>
      </Flex>
    </Flex>
  );
};

interface HomeInterface {
  resources: ResourceApiResponse["resources"]
}

export default function Home({ resources }: HomeInterface) {
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
      resources: resources
    }
  }
}