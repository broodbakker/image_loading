//components
import { Button, Flex, Text } from '@chakra-ui/react'

//functions
import { openWidget } from '../util/functions'

export const Header = () => {
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

