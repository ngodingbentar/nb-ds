'use client';

import { useEffect } from 'react'
import {
  Box,
  Button,
  Center,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteUser } from '../../hooks/useFetchUsers';
import { IUser } from '../../types/main';
import { setUserStore } from '../../store/redux/users';

const SideFooter = ({user, setShowDetails }: { user: IUser, setShowDetails: any }) => {
  const dispatch = useDispatch()
  const {refetch, isSuccess} = useDeleteUser(user?.id || '')

  useEffect(() => {
    if(isSuccess) {
      setShowDetails(false)
      dispatch(setUserStore({} as IUser))
    }
  }, [isSuccess, setShowDetails, dispatch])

  return (
    <Box display={'flex'} justifyContent={'space-between'} width='100%' height='10%' borderTop={'1px'} borderColor={'gray.400'}>
      <Center width='100%' justifyContent='space-between'>
        <Button onClick={() => setShowDetails(false)} >Close</Button>
        <Button colorScheme='red' onClick={() => refetch()}>Delete User</Button>
      </Center>
    </Box>
  )
}

export default SideFooter