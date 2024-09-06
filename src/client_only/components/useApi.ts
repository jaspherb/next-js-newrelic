import { fetch } from '@/utils/fetcher';
import logger from '@/utils/logger';
import { useState } from 'react';
import { User } from '@/types/user';

const useApi = () => {
  const [users, setUsers] = useState<User[]>();
  const fetchUsers = async () => {
    try {
      const response = await fetch('users');

      if (response) {
        setUsers(response.data);
      }
      return;
    } catch (error) {
      logger.info(error);
    }
  };

  return {
    fetchUsers,
    users
  };
};

export default useApi;
