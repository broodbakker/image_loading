//components
import { Button, Flex, Text } from '@chakra-ui/react'

//functions
import { openWidget } from '../util/functions/cloudinary'

export const Header = () => {
  return (
    <Flex
      px="4"
      py="4"
      justify="space-between"
      pos="fixed" w="full" zIndex="2"
      background="white"
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

