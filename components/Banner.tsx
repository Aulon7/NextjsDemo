import Link from 'next/link';
import { Box, Text, Button, Flex, Image } from '@chakra-ui/react';
import { BannerInterface } from './types/interface';

const Banner = ({ purpose, imageUrl, title, description, linkName, buttonText }: BannerInterface) => {
  return (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' p='10' marginBottom='5' bgGradient='linear(to-r, gray.100, blue.100)'>
      <Image src={imageUrl} height={400} width={300} alt='image' className='main-image' />
      <Box p='5'>
        <Text fontSize={{ base: '11px', md: '13px', lg: '15px' }} fontWeight='medium' color='gray.500'>
          {purpose}
        </Text>
        <Text fontSize={{ base: '20px', md: '30px', lg: '35px' }} fontWeight='bold' w={400}>
          {title}
        </Text>
        <Text fontSize={{ base: '15px', md: '20', lg: '20px' }} paddingTop='3' paddingBottom='3' color='gray.700'>
          {description}
        </Text>
        <Link href={linkName}>
          <Button fontSize='md' border='2px' borderColor='black.400'>
            {buttonText}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
export default Banner;
