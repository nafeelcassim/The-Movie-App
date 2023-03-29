import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {apiManager} from '../../network/apiManager';
import {ErrorResponse} from '../../types/response/errorResponse';
import {
  MoviesDataContent,
  MoviesListResponse,
} from '../../types/response/moviesListResponse';
import {networkConstants, Status} from '../../util/constants';

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
    resetData: (state: MovieSliceState) => {
      state.loading = false;
      state.page = 0;
      state.status = Status.idle;
      state.isEnd = false;
    },
  },
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
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Somethting went wrong while fetching data',
          position: 'top',
          visibilityTime: 3000,
        });
      });
  },
});
export const {resetData} = movieSlice.actions;
export default movieSlice.reducer;
