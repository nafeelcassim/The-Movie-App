import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {fetchTrendingMovies, resetData} from '../../../store/slices/movieSlice';
import {Status} from '../../../util/constants';
import MovieListView from '../view/MovieListView';

const MovieListController = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movie.movies);
  const initialLoading = useAppSelector(state => state.movie.loading);
  const status: Status = useAppSelector(state => state.movie.status);
  const currentPage = useAppSelector(state => state.movie.page);
  const isEnd = useAppSelector(state => state.movie.isEnd);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTrendingMovies({page: 1}));
    };
    dispatch(resetData());
    fetchData();
  }, [dispatch]);

  // List View End Reached Method
  const listViewOnEndReached = () => {
    if (status !== Status.fotterLoading && status !== Status.error) {
      dispatch(fetchTrendingMovies({page: currentPage + 1}));
    }
  };

  return (
    <MovieListView
      movies={movies}
      initialLoading={initialLoading}
      listViewOnEndReached={listViewOnEndReached}
      status={status}
      isEnd={isEnd}
    />
  );
};

export default MovieListController;
