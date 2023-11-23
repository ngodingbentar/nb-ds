'use client'
import { useFetchUsers } from "../hooks/useFetchUsers";
import React from 'react'
import { Box } from '@chakra-ui/react'
import TableUsers from "../components/TableUsers";

const UserPage = () => {
  const {data, isLoading} = useFetchUsers()

  return (
    <Box padding='1rem'>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <TableUsers data={data} />
      )}
    </Box>
  )
};

export default UserPage;
