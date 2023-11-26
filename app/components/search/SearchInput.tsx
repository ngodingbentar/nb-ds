'use client'
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Box,
  FormControl,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { validateEmail } from '../../utils/inputValidation';
import { useSearchUser } from '@/app/hooks/useFetchUsers';

const InputSearch = () => {
  const [email, setEmail] = useState('')
  const isEmailError = email === '' || !validateEmail(email)
  const { isLoading, refetch} = useSearchUser(email)

  function doSearch () {
    if(isEmailError) return
    refetch()
  }

  return(
    <Box>
      <FormControl isInvalid={isEmailError} isRequired>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color='gray.500' onClick={() => doSearch()} cursor='pointer' />
          </InputLeftElement>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input Email' onKeyDown={(e) => e.key === 'Enter' && doSearch()} />
          {email !== '' && (
            <InputRightElement>
              <CloseIcon color='gray.500' cursor={'pointer'} onClick={() => setEmail('')} />
            </InputRightElement>
          )}
        </InputGroup>
        {isEmailError && <FormErrorMessage>Please provide valid email</FormErrorMessage>}
      </FormControl>
      {isLoading && (
        <Box marginTop={10} display='flex' justifyContent='center'>
          <Spinner color='blue.500' marginRight={2} /> Loading...
        </Box>
      )}
    </Box>
  )
}

export default InputSearch