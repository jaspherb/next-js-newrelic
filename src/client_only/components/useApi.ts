import { fetchData } from '@/utils/fetcher';
import logger from '@/utils/logger';
import newrelic from 'newrelic';

const useApi = () => {
  const fetchDataTest = async () => {
    await newrelic.startWebTransaction('fetchUserData', async () => {
     const transaction = newrelic.getTransaction();
      try {
        const data = await fetchData(
          'https://fake-json-api.mock.beeceptor.com/users'
        );
        return {
          ad: { data }
        };
      } catch (error) {
        newrelic.noticeError(error);
      }
      finally {
        transaction.end();
      }
    });
  };

  return {
    fetchDataTest
  };
};

export default useApi;
