import { Box, Flex, Spacer, Text, Image } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { ParamsInterface, PropertyDetailsInterface } from '@components/types/interface';
import { baseUrl, fetchApi } from '@api/fetchApi';

const PropertyDetails = ({ propertyDetails }: PropertyDetailsInterface) => {
  const { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, coverPhoto } =
    propertyDetails;

  return (
    <Box maxWidth='1000px' margin='auto' p='4'>
      <Image src={coverPhoto?.url} alt='Image of House' objectFit='contain' />
      <Box w='full' p='6'>
        <Flex paddingTop='2' alignItems='center'>
          <Box paddingRight='3' color='green.400'>
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight='bold' fontSize='lg'>
            AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold' color='black.400'>
          {title}
        </Text>
        <Text lineHeight='1.5' color='gray.600'>
          {description}
        </Text>
      </Box>
      <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Type</Text>
          <Text fontWeight='bold'>{type}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Purpose</Text>
          <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Furnishing Status</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize='2xl' fontWeight='black' marginTop='5'>
            Other:
          </Text>
        )}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='sm' p='2' bg='gray.200' m='1' borderRadius='5'>
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
};
export default PropertyDetails;

export async function getServerSideProps({ params: { id } }: ParamsInterface) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
