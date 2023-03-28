import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiManager} from '../../network/apiManager';
import {ErrorResponse} from '../../types/response/errorResponse';
import {
  MoviesDataContent,
  MoviesListResponse,
} from '../../types/response/moviesListResponse';
import {networkConstants} from '../../util/constants';

interface MovieSliceState {
  loading: boolean;
  movies: MoviesDataContent[];
}

const initialState: MovieSliceState = {
  loading: false,
  movies: [],
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
      return data;
    } catch (err: any) {
      const errorData: ErrorResponse = err.response?.data;
      return rejectWithValue(errorData);
    }
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingMovies.pending, state => {
        state.loading = true;
        // state.status = 'loading';
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(fetchTrendingMovies.rejected, state => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
