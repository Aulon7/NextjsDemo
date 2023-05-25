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
        base: '100%',
        md: '100%',
        xl: '100%',
      }}
    >
      <Banner
        purpose='RENT A HOUSE'
        title='Rental Houses for Everyone'
        description='Explore variety of our beatiful buildings'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='/images/wp.jpg'
      />
      <Flex flexWrap='wrap' justifyContent='space-between' marginTop='20' marginBottom='20'>
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
        imageUrl='/images/banner.jpg'
        height='600px'
      />
      <Flex flexWrap='wrap' justifyContent='space-between' marginTop='20' marginBottom='20'>
        {propertiesForSale?.map((property: PropertyData) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
