'use client';
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import SearchSide from '../components/search/SearchSide';
import { IUser, IUserStore } from '../types/main';
import SearchInput from '../components/search/SearchInput';
import SearchCard from '../components/search/SearchCard';

const SearchPage = () => {
  const [showDetails, setShowDetails] = useState(false)
  const userStore = useSelector((state: IUserStore) => state.users.userStore) as IUser

  return (
    <div className='container search__page'>
      <Box maxW={'500px'}>
        <SearchInput />
        {(userStore && Object.keys(userStore).length > 0) && (
          <SearchCard userStore={userStore} setShowDetails={setShowDetails} />
        )}
      </Box>
      {showDetails && (
        <Box>
          <SearchSide setShowDetails={setShowDetails} data={userStore}  />
        </Box>
      )}
    </div>
  )
};

export default SearchPage;
