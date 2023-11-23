'use client';

import {
  Box,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { CloseIcon } from '@chakra-ui/icons'
import { IUserStore } from '../types/main';
import UserItem from './UserItem';

const SearchSide = ({ setShowDetails }: { setShowDetails: any }) => {
  const userStore = useSelector((state: IUserStore) => state.users.user)

  return (
    <div className="search-side">
      <Box borderBottom={'1px'} borderColor={'gray.400'} paddingBottom={4}>
        <Heading as='h3' size='lg'>
          User Details
        </Heading>
        <Text>This inquiry about user with email: {userStore?.email}.</Text>
        <Box position={'absolute'} right={2} top={2}>
          <CloseIcon color='gray.500' cursor={'pointer'} onClick={() => setShowDetails(false)} />
        </Box>
      </Box>
      <Box marginTop={4}>
        <UserItem title="ID" item={userStore?.id} />
        <UserItem title="Name" item={userStore?.name} />
        <UserItem title="Email" item={userStore?.email} />
        <UserItem title="Country Name" item={userStore?.country_name} />
        <UserItem title="Device Id" item={userStore?.device_id} />
        <UserItem title="Bitcoin Address" item={userStore?.bitcoin_address} />
        <UserItem title="Avatar" item={userStore?.avatar} />
        <UserItem title="Login Ip" item={userStore?.login_ip} />
        <UserItem title="Active Device Mac" item={userStore?.active_device_mac} />
        <UserItem title="Notes" item={userStore?.notes} />
        <UserItem title="Age" item={userStore?.age} />
        <UserItem title="Referral Id" item={userStore?.referral_id} />
        <UserItem title="Locale" item={userStore?.locale} />
        <UserItem title="Favorite Music" item={userStore?.favorite_music} />
        <UserItem title="Phone Number" item={userStore?.phone_number} />
        <UserItem title="Twitter Username" item={userStore?.twitter_username} />
        <UserItem title="Job" item={userStore?.job} />
        <UserItem title="Invoice Email Address" item={userStore?.invoice_email_address} />
        <UserItem title="Hmac Secret" item={userStore?.hmac_secret} />
        <UserItem title="Favorite Quote" item={userStore?.favorite_quote} />
        <UserItem title="App Version" item={userStore?.app_version} />
        <UserItem title="Favorite Animal" item={userStore?.favorite_animal} />
        <UserItem title="Latitude" item={userStore?.latitude} />
        <UserItem title="Longtitude" item={userStore?.longtitude} />
        <UserItem title="Meterial" item={userStore?.meterial} />
        <UserItem title="Shipping Address" item={userStore?.shipping_address} />
        <UserItem title="Timezone" item={userStore?.timezone} />
        <UserItem title="Zip Code" item={userStore?.zip_code} />
      </Box>
    </div>
  )
}

export default SearchSide