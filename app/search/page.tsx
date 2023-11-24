'use client';
import { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Box,
  Button,
  useToast,
  Card,
  CardBody,
  Text,
  Heading,
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import SearchSide from '../components/SearchSide';
import { useQuery } from 'react-query';
import axios from 'axios';

const SearchPage = () => {
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user-detail'],
    enabled: false,
    cacheTime: 0,
    queryFn: async () => {
      const userRes = await axios.get(`/api/users/${email}`)
      if(userRes.data.data === null) {
        toast({
          title: 'Account not found.',
          description: "We can't find your account.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
      else {
        toast({
          title: 'Account found.',
          description: "We've found your account.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
      return userRes.data.data
    },
  })

  console.log('data', data)
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
