import Image from "next/image"
//components
import { Header } from "../components/header"
import {
  AspectRatio, Box, chakra, SimpleGrid, Spinner, Center, IconButton
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
//typescript
import { Iphoto } from "../util/typescript"
//hooks
import { useImages } from '../util/hooks';
//cloudinary
import { transformImage, transformImageBlur } from "../util/functions/cloudinary";

export default function Home() {
  const { images, loading, handleDeleteImage } = useImages();

  return (
    <div>
      <Header />

      <Box pt="20">
        {loading && <Center p="4"> <Spinner></Spinner> </Center>}

        <SimpleGrid columns={[2, null, 3]} spacing={1}>
          {images?.map((image, index) => {
            return (
              <SinglePhoto key={index} imageLink={image} handleClick={handleDeleteImage} />
            )
          })}
        </SimpleGrid>
      </Box>

    </div>
  )
}


const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "layout", "priority", "_hover"].includes(prop)
})

const SinglePhoto = ({ imageLink, handleClick }: Iphoto) => {
  const image = transformImage(imageLink.public_id)
  const imageBlur = transformImageBlur(imageLink.public_id)

  return (
    <AspectRatio
      pos="relative"
      ratio={3 / 3} objectFit='cover' backgroundImage={imageBlur.toURL()}
      backgroundSize="cover"
    >
      <Box>
        <Box pos="absolute" right={2} top={2} zIndex="1"
          cursor="pointer">
          <IconButton aria-label='remove image' icon={<CloseIcon />} onClick={() =>
            handleClick(imageLink.public_id)} color="white" variant="outline" />
        </Box>
        <ChakraImage
          layout="fill"
          src={image.toURL()}
          alt={imageLink.public_id}
          placeholder="blur"
        />
      </Box>
    </AspectRatio>
  )
}

