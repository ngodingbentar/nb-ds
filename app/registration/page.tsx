'use client';
import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'
import { setLoading } from "../store/redux/main";
import axios from 'axios';

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const setLoad = () => {
    console.log('setloading 1')
    dispatch(setLoading(true))
  }

  // form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const isNameError = name === ''
  const isEmailError = name === ''

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)

  const handleSubmit = async () => {
    console.log('handleSubmit')
    fetch('/api/users')
    .then((res) => {
      console.log(res)
    })
    // try {
    //   await axios.get('/api/users').then((res) => {
    //     console.log(res.data)
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <div className='registration'>
      <div>
        <button onClick={setLoad}>setloading</button>
        <Box mt={4}>
          <FormControl isInvalid={isNameError}>
            <FormLabel>Name</FormLabel>
            <Input type='text' value={name} onChange={handleNameChange} />
            {!isNameError ? (
              <FormHelperText>
                Enter the email you like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Please provide name</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isEmailError}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={handleEmailChange} />
            {!isEmailError ? (
              <FormHelperText>
                Enter the email you like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Please provide email</FormErrorMessage>
            )}
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
