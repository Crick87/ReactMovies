import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchMovies = async ({ searchQuery, sortCriteria, activeGenre, signal }) => {

  const queryParams = {
    sortBy: sortCriteria,
    sortOrder: 'asc', // asc / desc
    search: searchQuery,
    searchBy: 'title',
    limit: '15',
  };

  if (activeGenre && activeGenre !== 'All') {
    queryParams.filter = activeGenre;
  }

  try {
    console.log('Fetching movies with params:', queryParams);
    const response = await apiClient.get('/movies', {
      params: queryParams,
      signal: signal,
    });
    console.log('API Response:', response.data);
    return response.data.data || [];
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error("Error fetching movies:", error);
      throw error;
    }
    return [];
  }
};