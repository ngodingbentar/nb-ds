'use client'
import { useFetchSales } from "./hooks/useFetchSales";
import React from 'react'
import { Box } from '@chakra-ui/react'
import TableLists from "./components/TableLists";

const HomePage = () => {
  const {data, isLoading} = useFetchSales()

  return (
    <Box padding='1rem'>
      {isLoading && <Box>Loading</Box>}
      {!isLoading && (
        <TableLists data={data} type="sales" />
      )}
    </Box>
  )
};

export default HomePage;
