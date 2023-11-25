'use client';
import { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Box,
  Button,
  Card,
  CardBody,
  Text,
  Heading,
  Spinner,
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import SearchSide from '../components/SearchSide';
import { useFetchDetailUser } from '../hooks/useFetchUsers';

const SearchPage = () => {

  const [email, setEmail] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const {data, isLoading, refetch} = useFetchDetailUser(email)
  console.log('isLoading', isLoading)

  return (
    <div className='container search__page'>
      <Box maxW={'500px'}>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color='gray.500' onClick={() => refetch()} cursor='pointer' />
            </InputLeftElement>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Id' onKeyDown={(e) => e.key === 'Enter' && refetch()} />
            {email !== '' && (
              <InputRightElement>
                <CloseIcon color='gray.500' cursor={'pointer'} onClick={() => setEmail('')} />
              </InputRightElement>
            )}
          </InputGroup>
        </Box>
        {isLoading && (
          <Box marginTop={10} display='flex' justifyContent='center'>
            <Spinner color='blue.500' marginRight={2} /> Loading...
          </Box>
        )}
        {(!isLoading && data) && (
          <Box marginTop={10}>
            <Card>
              <CardBody display='flex' justifyContent='center'>
                  <Box textAlign='center' padding={8}>
                    <Heading as='h2' size='xl'>
                      {data.name}
                    </Heading>
                    <Text marginTop={2} borderBottom='1px' paddingBottom={4} borderColor='gray.500' color='gray.500' paddingX={4}>
                      {data.email}
                    </Text>
                    <Box mt={4} display='flex' justifyContent='center'>
                      <Button colorScheme='blue' onClick={() => setShowDetails(true)}>View User Profile</Button>
                    </Box>
                  </Box>
              </CardBody>
            </Card>
          </Box>
        )}
      </Box>
      {showDetails && (
        <Box>
          <SearchSide setShowDetails={setShowDetails} data={data}  />
        </Box>
      )}
    </div>
  )
};

export default SearchPage;
