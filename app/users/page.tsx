'use client'
import { useFetchUsers } from "../hooks/useFetchUsers";
import React from 'react'
import { Box } from '@chakra-ui/react'
import TableLists from "../components/TableLists";

const UserPage = () => {
  const {data, isLoading} = useFetchUsers()

  return (
    <Box padding='1rem'>
      {isLoading && <Box>Loading</Box>}
      {(!isLoading && data) && (
        <TableLists data={data} type="users" />
      )}
    </Box>
  )
};

export default UserPage;
