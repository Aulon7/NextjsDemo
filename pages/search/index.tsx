'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '@components/SearchFilters';
import Property from '@components/Property';
import NoResult from '../../public/images/noresult.svg';
import { baseUrl, fetchApi } from '@api/fetchApi';
import { useRouter } from 'next/router';
import { PropertiesInterface, SearchInterface } from '@components/types/interface';

const Search = ({ properties }: PropertiesInterface) => {
  console.log('testtttttt', properties);
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  const searchClickHandler = () => {
    setSearchFilters((prevFilters) => !prevFilters);
  };

  return (
    <Box>
      <Flex
        justifyContent='center'
        alignItems='center'
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontSize='lg'
        onClick={searchClickHandler}
      >
        <Text>Search by filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Flex justifyContent='center' marginTop='10'>
        <Text fontSize='3xl' p='4' fontWeight='bold' color='blue.500'>
          Properties {router.query.purpose}
        </Text>
      </Flex>

      <Flex flexWrap='wrap'>
        {properties?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties?.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
          <Image src={NoResult} alt='Error image' />
          <Text fontSize='xl' marginTop='3'>
            No Results Found!
          </Text>
        </Flex>
      )}
    </Box>
  );
};
export default Search;

export async function getServerSideProps({ query }: SearchInterface) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'monthly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
