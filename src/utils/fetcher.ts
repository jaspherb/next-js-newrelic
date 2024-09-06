import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fake-json-api.mock.beeceptor.com/',
  timeout: 5000, // Timeout if necessary
  headers: {
    ContentType: 'program/json'
    // Add all custom headers here
  }
});

const fetch = async (url, options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export { fetch };
