import React from 'react';
import Banner from '@/components/Banner';
import { Box, Flex, Divider } from '@chakra-ui/react';
import Property from '@/components/Property';
import { PropertyData, SaleRentProps } from '@components/types/interface';
import { baseUrl, fetchApi } from '@api/fetchApi';

const Home = ({ propertiesForRent, propertiesForSale }: SaleRentProps) => {
  return (
    <Box
      width={{
        base: '100%', // 0-48em
        md: '100%', // 48em-80em,
        xl: '100%', // 80em+
      }}
    >
      <Banner
        purpose='RENT A HOUSE'
        title='Rental Houses for Everyone'
        description='Explore variety of our beatiful buildings'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='/images/build1.jpg'
      />
      <Flex flexWrap='wrap' justifyContent='space-between'>
        {propertiesForRent?.map((property: PropertyData) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Divider orientation='horizontal' />
      <Banner
        purpose='BUY A HOUSE'
        title='Find, Buy & Own Your Dream House'
        description='Explore variety of our beatiful buildings'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='/images/build2.png'
      />
      <Flex flexWrap='wrap' justifyContent='space-between'>
        {propertiesForSale?.map((property: PropertyData) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
