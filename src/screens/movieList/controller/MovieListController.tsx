import React, {useEffect} from 'react';
import {useAppDispatch} from '../../../store/hooks';
import {fetchTrendingMovies} from '../../../store/slices/movieSlice';
import MovieListView from '../view/MovieListView';

const MovieListController = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(
          fetchTrendingMovies({page: 1}),
        ).unwrap();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return <MovieListView />;
};

export default MovieListController;
