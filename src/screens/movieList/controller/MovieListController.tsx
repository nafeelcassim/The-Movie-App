import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {fetchTrendingMovies, resetData} from '../../../store/slices/movieSlice';
import {appStrings, Status, ToastType} from '../../../util/constants';
import MovieListView from '../view/MovieListView';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {showToastData} from '../../../util/utils';

const MovieListController = () => {
  // Constants
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movie.movies);
  const initialLoading = useAppSelector(state => state.movie.loading);
  const status: Status = useAppSelector(state => state.movie.status);
  const currentPage = useAppSelector(state => state.movie.page);
  const isEnd = useAppSelector(state => state.movie.isEnd);

  const netInfo = useNetInfo();

  // Use effect to fetch the initial Data
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTrendingMovies({page: 1}));
    };

    if (netInfo.isConnected) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Use effect to check network connectivity
  useEffect(() => {
    // Show toast if no network connectivity
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showToastData(
          ToastType.info,
          appStrings.warning,
          appStrings.noNetworkConnectivity,
        );
      }
    });

    // unscribe from event listener
    return () => {
      unsubscribe();
    };
  }, []);

  // List View End Reached Method
  const listViewOnEndReached = () => {
    if (status !== Status.fotterLoading) {
      dispatch(fetchTrendingMovies({page: currentPage + 1}));
    }
  };

  // Handle on refresh functionality
  const onRefresh = async () => {
    if (netInfo.isConnected) {
      dispatch(resetData());
      dispatch(fetchTrendingMovies({page: 1}));
    }
  };

  return (
    <MovieListView
      movies={movies}
      initialLoading={initialLoading}
      listViewOnEndReached={listViewOnEndReached}
      status={status}
      isEnd={isEnd}
      onRefresh={onRefresh}
    />
  );
};

export default MovieListController;
