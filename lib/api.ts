import axios from 'axios';

// Ensure the 'export' keyword is here
export const getPosts = async () => {
  const response = await axios.get('https://6a4763b0abfcbaade11855a6.mockapi.io/posts');
  return response.data;
};

// If you have a specific ID fetcher, export that too:
export const getPostById = async (id: string) => {
  const response = await axios.get(`https://6a4763b0abfcbaade11855a6.mockapi.io/posts/${id}`);
  return response.data;
};