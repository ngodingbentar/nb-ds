'use client';

import {
  Box,
  Text,
  Heading,
  Button,
  Center,
} from '@chakra-ui/react'
// import { useSelector } from 'react-redux';
import { CloseIcon } from '@chakra-ui/icons'
import { IUser } from '../types/main';
import UserItem from './UserItem';
import SideFooter from './SideFooter';

const SearchSide = ({ setShowDetails, data }: { setShowDetails: any, data: IUser }) => {
  // const userStore = useSelector((state: IUserStore) => state.users.user)
  // function handleResetUserDetail() {

  // }

  return (
    <Box className="search-side">
      <Box overflowY={'scroll'} height={'90%'} marginBottom={4}>
        <Box>
          <Heading as='h3' size='lg'>
            User Details
          </Heading>
          <Text>This inquiry about user with email: {data?.email}.</Text>
          <Box position={'absolute'} right={2} top={2}>
            <CloseIcon color='gray.500' cursor={'pointer'} onClick={() => setShowDetails(false)} />
          </Box>
        </Box>
        <Box marginTop={4}>
          <UserItem title="ID" item={data?.id} />
          <UserItem title="Name" item={data?.name} />
          <UserItem title="Email" item={data?.email} />
          <UserItem title="Country Name" item={data?.country_name} />
          <UserItem title="Device Id" item={data?.device_id} />
          <UserItem title="Bitcoin Address" item={data?.bitcoin_address} />
          <UserItem title="Avatar" item={data?.avatar} />
          <UserItem title="Login Ip" item={data?.login_ip} />
          <UserItem title="Active Device Mac" item={data?.active_device_mac} />
          <UserItem title="Notes" item={data?.notes} />
          <UserItem title="Age" item={data?.age} />
          <UserItem title="Referral Id" item={data?.referral_id} />
          <UserItem title="Locale" item={data?.locale} />
          <UserItem title="Favorite Music" item={data?.favorite_music} />
          <UserItem title="Phone Number" item={data?.phone_number} />
          <UserItem title="Twitter Username" item={data?.twitter_username} />
          <UserItem title="Job" item={data?.job} />
          <UserItem title="Invoice Email Address" item={data?.invoice_email_address} />
          <UserItem title="Hmac Secret" item={data?.hmac_secret} />
          <UserItem title="Favorite Quote" item={data?.favorite_quote} />
          <UserItem title="App Version" item={data?.app_version} />
          <UserItem title="Favorite Animal" item={data?.favorite_animal} />
          <UserItem title="Latitude" item={data?.latitude} />
          <UserItem title="Longitude" item={data?.longitude} />
          <UserItem title="Material" item={data?.material} />
          <UserItem title="Shipping Address" item={data?.shipping_address} />
          <UserItem title="Timezone" item={data?.timezone} />
          <UserItem title="Zip Code" item={data?.zip_code} />
        </Box>
      </Box>
      <SideFooter setShowDetails={setShowDetails} user={data} />
    </Box>
  )
}

export default SearchSide