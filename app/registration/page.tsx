'use client';
import { SetStateAction, useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useAddUser } from '../hooks/useFetchUsers';
import { validateEmail, validateName } from '../utils/inputValidation';

const RegistrationPage = () => {
  const toast = useToast()

  // form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const isNameError = name === '' || !validateName(name)
  const isEmailError = email === '' || !validateEmail(email)

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)
  
  const data = {
    name,
    email
  }
  const { isLoading, refetch } = useAddUser(data)

  return (
    <div className='registration'>
      <Box>
        <Box mt={4}>
          <FormControl isInvalid={isNameError} isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='text' value={name} onChange={handleNameChange} />
            {isNameError && <FormErrorMessage>Please provide name</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={isEmailError} isRequired marginTop={4}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={handleEmailChange} />
            {isEmailError && <FormErrorMessage>Please provide email</FormErrorMessage>}
          </FormControl>
        </Box>
        <Box mt={10} display='flex' justifyContent='end'>
          <Button colorScheme='blue' onClick={() => refetch()} className={(isEmailError || isNameError || isLoading) ? 'btn-disabled' : ''}>
            {isLoading ? (
              <Box display='flex' justifyContent='center'>
                <Spinner color='white' marginRight={2} /> Loading...
              </Box>
            ) : (
              <span>Submit User</span>
            )}
          </Button>
        </Box>
      </Box>
    </div>
  )
};

export default RegistrationPage;
