import Link from 'next/link';
import { Box, Text, Button, Flex, Image } from '@chakra-ui/react';
import { BannerInterface } from './types/interface';
import { Parallax } from 'react-parallax';

const Banner = ({ purpose, imageUrl, title, description, linkName, buttonText, height = '100vh' }: BannerInterface) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={imageUrl}
      bgImageAlt='the Image'
      bgImageStyle={{
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
      }}
    >
      <Flex flexWrap='wrap' justifyContent='center' alignItems='center' p='10' marginBottom='5' height={height}>
        <Box p='5'>
          <Text fontSize={{ base: '11px', md: '13px', lg: '18px' }} fontWeight='medium' color='white'>
            {purpose}
          </Text>
          <Text fontSize={{ base: '20px', md: '30px', lg: '45px' }} fontWeight='bold' w={400} color='white'>
            {title}
          </Text>
          <Text fontSize={{ base: '15px', md: '20', lg: '22px' }} paddingTop='3' paddingBottom='3' color='white'>
            {description}
          </Text>
          <Link href={linkName}>
            <Button fontSize='xl' border='2px' colorScheme='facebook' p='5'>
              {buttonText}
            </Button>
          </Link>
        </Box>
      </Flex>
    </Parallax>
  );
};
export default Banner;
