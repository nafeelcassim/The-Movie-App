import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiManager from '../../network/apiManager';
import {ErrorResponse} from '../../types/response/errorResponse';
import {
  MoviesDataContent,
  MoviesListResponse,
} from '../../types/response/moviesListResponse';
import {
  appStrings,
  networkConstants,
  Status,
  ToastType,
} from '../../util/constants';
import {showToastData} from '../../util/utils';

interface MovieSliceState {
  loading: boolean;
  movies: MoviesDataContent[];
  page: number;
  status: Status;
  isEnd: boolean;
}

const initialState: MovieSliceState = {
  loading: false,
  movies: [],
  page: 0,
  status: Status.idle,
  isEnd: false,
};

// Async thunk to fetch trending movies
export const fetchTrendingMovies = createAsyncThunk(
  networkConstants.getTopRatedMovies,
  async (properties: {page: number}, {rejectWithValue}: any) => {
    try {
      const response = await apiManager.get(
        networkConstants.getTopRatedMovies,
        {
          params: {
            page: properties.page,
          },
        },
      );
      const data: MoviesListResponse = response.data;
      return {
        movies: data.results,
        page: properties.page,
      };
    } catch (err: any) {
      const errorData: ErrorResponse = err.response?.data;
      return rejectWithValue(errorData);
    }
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // Reducer to reset data when the app loads initially
    resetData: (state: MovieSliceState) => {
      state.loading = false;
      state.page = 0;
      state.status = Status.idle;
      state.isEnd = false;
    },
  },
  // Extra reducer to handle the API call of fetch post
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingMovies.pending, (state: MovieSliceState) => {
        if (state.page === 0) {
          state.loading = true;
        } else {
          state.status = Status.fotterLoading;
        }
      })
      .addCase(
        fetchTrendingMovies.fulfilled,
        (state: MovieSliceState, action) => {
          state.loading = false;
          console.log(action.payload.page);
          if (action.payload.page === 1) {
            state.movies = action.payload.movies;
          } else {
            state.status = Status.success;
            state.movies = state.movies.concat(action.payload.movies);
          }
          state.page = action.payload.page;
          if (action.payload.movies.length < 20) {
            state.isEnd = true;
          }
        },
      )
      .addCase(fetchTrendingMovies.rejected, (state: MovieSliceState) => {
        state.loading = false;
        state.status = Status.error;
        showToastData(
          ToastType.error,
          appStrings.error,
          appStrings.somethingWentWrong,
        );
      });
  },
});
export const {resetData} = movieSlice.actions;
export default movieSlice.reducer;
