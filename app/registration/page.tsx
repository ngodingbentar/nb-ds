'use client';
import { SetStateAction, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react'
import { addUser } from '../api/users';

const RegistrationPage = () => {
  const toast = useToast()

  // form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const isNameError = name === ''
  const isEmailError = name === ''

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)

  const handleSubmit = async () => {
    const data = {
      name,
      email
    }
    try {
      await addUser(data)
        .then((res) => {
          console.log('res users', res)
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
        })
    } catch (error) {
      toast({
        title: 'Account not created.',
        description: 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }

  return (
    <div className='registration'>
      <div>
        <Box mt={4}>
          <FormControl isInvalid={isNameError}>
            <FormLabel>Name</FormLabel>
            <Input type='text' value={name} onChange={handleNameChange} />
            {isNameError && <FormErrorMessage>Please provide name</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={isEmailError}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={handleEmailChange} />
            {isEmailError && <FormErrorMessage>Please provide email</FormErrorMessage>}
          </FormControl>
        </Box>
        <Box mt={10} display='flex' justifyContent='center'>
          <Button colorScheme='blue' onClick={handleSubmit}>Submit User</Button>
        </Box>
      </div>
    </div>
  )
};

export default RegistrationPage;
