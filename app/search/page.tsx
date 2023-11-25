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
  useToast,
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import SearchSide from '../components/SearchSide';
import { useFetchDetailUser, useFetchUsers } from '../hooks/useFetchUsers';
import { IUser } from '../types/main';

const SearchPage = () => {
  const toast = useToast()
  const {data , isLoading} = useFetchUsers()

  const [email, setEmail] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const [user, setUser] = useState({} as IUser)
  const [loading, setLoading] = useState(false)

  function doSearch() {
    setLoading(true)
    const result = data.find((user: IUser) => user.email === email)
    if (result) {
      setUser(result)
      toast({
        title: 'Account found',
        description: "We've found your account.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })
    } else {
      toast({
        title: 'Account not found',
        description: "We can't find your account.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
    setLoading(false)
  }

  return (
    <div className='container search__page'>
      <Box maxW={'500px'}>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color='gray.500' onClick={() => doSearch()} cursor='pointer' />
            </InputLeftElement>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Id' onKeyDown={(e) => e.key === 'Enter' && doSearch()} />
            {email !== '' && (
              <InputRightElement>
                <CloseIcon color='gray.500' cursor={'pointer'} onClick={() => setEmail('')} />
              </InputRightElement>
            )}
          </InputGroup>
        </Box>
        {loading && (
          <Box marginTop={10} display='flex' justifyContent='center'>
            <Spinner color='blue.500' marginRight={2} /> Loading...
          </Box>
        )}
        {(!loading && Object.keys(user).length > 0) && (
          <Box marginTop={10}>
            <Card>
              <CardBody display='flex' justifyContent='center'>
                  <Box textAlign='center' padding={8}>
                    <Heading as='h2' size='xl'>
                      {user.name}
                    </Heading>
                    <Text marginTop={2} borderBottom='1px' paddingBottom={4} borderColor='gray.500' color='gray.500' paddingX={4}>
                      {user.email}
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
          <SearchSide setShowDetails={setShowDetails} data={user}  />
        </Box>
      )}
    </div>
  )
};

export default SearchPage;
