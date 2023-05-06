import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=2ead4d55a2c7da4f5313610b563685be`
  );
  const movies = await data.json();
  return movies;
};

export const movieFetch = createAsyncThunk('movies/getTopMovies', async () => {
  return await fetchMovies();
});

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.movies = action.payload;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  movies: null,
  isLoading: false,
  error: '',
};

const mySlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(movieFetch.pending, handlePending)
      .addCase(movieFetch.fulfilled, handleFulfilled)
      .addCase(movieFetch.rejected, handleRejected);
  },
});

export const moviesReducer = mySlice.reducer;

// extraReducers: {
//   [movieFetch.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [movieFetch.fulfilled]: (state, action) => {
//     state.isLoading = false;
//     state.movies = action.payload;
//     state.error = '';
//   },
//   [movieFetch.rejected]: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },

// export const movieFetch = () => {
//   return async dispatch => {
//     try {
//       dispatch(mySlice.actions.fetching());
//       const data = await fetch(
//         `https://api.themoviedb.org/3/trending/movie/day?api_key=2ead4d55a2c7da4f5313610b563685be`
//       );
//       const movies = await data.json();
//       console.log('movies :>> ', movies);
//       dispatch(mySlice.actions.fetchSuccess(movies));
//     } catch (error) {
//       dispatch(mySlice.actions.fetchError(error));
//     }
//   };
// };

// reducers: {
//   fetching: (state, action) => {
//     state.isLoading = true;
//   },
//   fetchSuccess: (state, action) => {
//     state.isLoading = false;
//     state.movies = action.payload;
//     state.error = '';
//   },
//   fetchError: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },
