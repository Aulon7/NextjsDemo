import Link from 'next/link';
import { Box, Flex, Text, Avatar, CardBody, Card, Image, Button } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { PropertyProps } from './types/interface';

const Property = ({ property }: PropertyProps) => {
  const { coverPhoto, price, rentFrequency, rooms, baths, area, agency, isVerified, externalID } = property;

  return (
    <Card variant='elevated' m='5' boxShadow='xl' rounded='md'>
      <CardBody>
        <Flex flexWrap='wrap' w='100%' h='100%' p='5' paddingTop='0px' justifyContent='space-between' alignItems='center'>
          <Box>
            <Image src={coverPhoto?.url} width={350} height={250} alt='House' />
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
              <Flex alignItems='center'>
                <Box paddingRight='2' color='green.400'>
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight='bold' fontSize='lg'>
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
              {rooms}
              <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Flex justifyContent='center' marginTop='5'>
              <Link href={`/property/${externalID}`} passHref>
                <Button fontSize='md' border='2px' borderColor='blue.400'>
                  Read more
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Property;
