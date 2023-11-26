'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  Text,
  Heading,
} from '@chakra-ui/react'
import { IUser } from '@/app/types/main';

const SearchCard = ({userStore, setShowDetails}: {userStore: IUser, setShowDetails: any}) => {
  return (
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
                <Button colorScheme='blue' onClick={() => setShowDetails(true)}>View User Profile</Button>
              </Box>
            </Box>
        </CardBody>
      </Card>
    </Box>
  )
}

export default SearchCard