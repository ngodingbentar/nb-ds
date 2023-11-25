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
} from '@chakra-ui/react'
import { addUser } from '../api/users';

const RegistrationPage = () => {
  const toast = useToast()

  // form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const isNameError = name === '' || !validateName(name)
  const isEmailError = email === '' || !validateEmail(email)

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
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
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

  function validateName(value: string) {
    var re = /^([a-zA-Z ]){2,30}$/
    return re.test(value);
  }

  function validateEmail(value: string) {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
  }

  return (
    <div className='registration'>
      <div>
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
          <Button colorScheme='blue' onClick={handleSubmit} className={isEmailError || isNameError ? 'btn-disabled' : ''}>Submit User</Button>
        </Box>
      </div>
    </div>
  )
};

export default RegistrationPage;
