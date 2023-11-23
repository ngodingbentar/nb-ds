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
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../api/users';
import { setLoading, setUser } from '../store/redux/users';
import { IUser } from '../types/main';

const SearchPage = () => {
  const dispatch = useDispatch()
  const toast = useToast()
  const userStore = useSelector((state: IUser) => state.users.user)
  const loading = useSelector((state: IUser) => state.users.loading)

  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    dispatch(setLoading(true))
    
    await searchUser(email)
      .then((res) => {
        console.log('res 123', res)
        dispatch(setUser(res.data))
        dispatch(setLoading(false))
        toast({
          title: 'Account found.',
          description: "We've found your account.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }).catch((err) => {
        dispatch(setLoading(false))
        toast({
          title: 'Account not found.',
          description: "We can't find your account.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      })
  }
  const cek = () => {
    console.log('userStore', userStore)
    console.log(Object.keys(userStore).length)
  }
  return (
    <div className='container search__page'>
      <Box>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color='gray.500'  onClick={handleSubmit} cursor='pointer' />
          </InputLeftElement>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter amount' onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
          <InputRightElement>
            <CloseIcon color='gray.500' />
          </InputRightElement>
        </InputGroup>
      </Box>
      {(!loading && Object.keys(userStore).length > 0) && (
        <Box marginTop={10}>
          <Card>
            <CardBody display='flex' justifyContent='center'>
                <Box textAlign='center' padding={8}>
                  <Heading as='h2' size='xl'>
                    {userStore.name}
                  </Heading>
                  <Text marginTop={2} borderBottom='1px' paddingBottom={4} borderColor='gray.500' color='gray.500' paddingX={4}>
                    {userStore.email}
                  </Text>
                  <Box mt={4} display='flex' justifyContent='center'>
                    <Button colorScheme='blue' onClick={handleSubmit}>View User Profile</Button>
                  </Box>
                </Box>
            </CardBody>
          </Card>
        </Box>
      )}
    </div>
  )
};

export default SearchPage;
