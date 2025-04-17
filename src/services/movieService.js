import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Fetches a list of movies from the API based on search, sort, and filter criteria.
 * @param {object} options - The options for fetching movies.
 * @param {string} [options.searchQuery] - The search term.
 * @param {string} [options.sortCriteria] - The field to sort by (e.g., 'title', 'release_date').
 * @param {string} [options.activeGenre] - The genre to filter by. 'All' means no genre filter.
 * @param {AbortSignal} [options.signal] - An AbortSignal to allow canceling the request.
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 */
export const fetchMovies = async ({ searchQuery, sortCriteria, activeGenre, signal }) => {

  const queryParams = {
    sortBy: sortCriteria || 'title',
    sortOrder: 'asc', // Or desc
    search: searchQuery || '',
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
    console.log('API Response (fetchMovies):', response.data);
    return response.data.data || [];
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled (fetchMovies):', error.message);
    } else {
      if (error.response) {
        console.error("Error fetching movies - Server responded:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("Error fetching movies - No response received:", error.request);
      } else {
        console.error('Error fetching movies - Request setup error:', error.message);
      }
      throw error;
    }
    return [];
  }
};

/**
 * Adds a new movie to the API.
 * @param {object} movieData - The movie data object conforming to the MovieBase schema.
 * Required fields: title, poster_path, overview, genres, runtime.
 * @returns {Promise<object>} A promise that resolves to the newly created movie object (including its ID).
 */
export const addMovie = async (movieData) => {
  console.log('Attempting to add movie with data:', movieData);
  try {
    const response = await apiClient.post('/movies', movieData);

    console.log('Movie added successfully. API Response (addMovie):', response.data);
    return response.data;

  } catch (error) {
    if (error.response) {
      console.error("Error adding movie - Server responded:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Error adding movie - No response received:", error.request);
    } else {
      console.error('Error adding movie - Request setup error:', error.message);
    }
    throw error;
  }
};

/**
 * Fetches a single movie by its ID.
 * @param {string|number} id - The unique identifier of the movie.
 * @returns {Promise<object>} A promise that resolves to the movie object.
 */
export const fetchMovieById = async (id) => {
  if (!id) {
    console.error("fetchMovieById requires an ID.");
    throw new Error("Movie ID is required.");
  }
  console.log(`Getting movie with ID: ${id}`);
  try {
    const response = await apiClient.get(`/movies/${id}`);
    console.log('API Response (fetchMovieById):', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error fetching movie ${id} - Server responded:`, error.response.status, error.response.data);
      if (error.response.status === 404) {
         console.warn(`Movie with ID ${id} not found.`);
      }
    } else if (error.request) {
      console.error(`Error fetching movie ${id} - No response received:`, error.request);
    } else {
      console.error(`Error fetching movie ${id} - Request setup error:`, error.message);
    }
    throw error;
  }
};

/**
 * Updates an existing movie.
 * @param {object} movieData - The movie data object conforming to the Movie schema (must include 'id').
 * @returns {Promise<object>} A promise that resolves to the updated movie object.
 */
export const updateMovie = async (movieData) => {
  if (!movieData || !movieData.id) {
      console.error("updateMovie requires movie data including an ID.");
      throw new Error("Movie data with ID is required for update.");
  }
  console.log(`Attempting to update movie with ID: ${movieData.id}`, movieData);
  try {
    const response = await apiClient.put('/movies', movieData);
    console.log('Movie updated successfully. API Response (updateMovie):', response.data);
    return response.data;
  } catch (error) {
     if (error.response) {
      console.error(`Error updating movie ${movieData.id} - Server responded:`, error.response.status, error.response.data);
       if (error.response.status === 404) {
         console.warn(`Movie with ID ${movieData.id} not found for update.`);
       }
    } else if (error.request) {
      console.error(`Error updating movie ${movieData.id} - No response received:`, error.request);
    } else {
      console.error(`Error updating movie ${movieData.id} - Request setup error:`, error.message);
    }
    throw error;
  }
};


/**
 * Deletes a movie by its ID.
 * @param {string|number} id - The unique identifier of the movie to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is successful.
 */
export const deleteMovie = async (id) => {
   if (!id) {
    console.error("deleteMovie requires an ID.");
    throw new Error("Movie ID is required for deletion.");
  }
  console.log(`Attempting to delete movie with ID: ${id}`);
  try {
    const response = await apiClient.delete(`/movies/${id}`);
    console.log(`Movie with ID: ${id} deleted successfully. Status: ${response.status}`);
    return;
  } catch (error) {
     if (error.response) {
      console.error(`Error deleting movie ${id} - Server responded:`, error.response.status, error.response.data);
       if (error.response.status === 404) {
         console.warn(`Movie with ID ${id} not found for deletion.`);
       }
    } else if (error.request) {
      console.error(`Error deleting movie ${id} - No response received:`, error.request);
    } else {
      console.error(`Error deleting movie ${id} - Request setup error:`, error.message);
    }
    throw error;
  }
};
