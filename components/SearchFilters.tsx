import React from 'react';
import { Flex, Select, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '@api/filterMockData';

const SearchFilters = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const { query } = router;

  const searchProperties = (filteredValues: any) => {
    const values = getFilterValues(filteredValues);

    values.forEach((item) => {
      if (item?.value && filteredValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: pathName, query: query });
  };

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filterData.map((filter) => (
        <Box key={filter?.queryName}>
          <Select placeholder={filter?.placeholder} w='fit-content' p='2' onChange={(e) => searchProperties({ [filter?.queryName]: e.target.value })}>
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
