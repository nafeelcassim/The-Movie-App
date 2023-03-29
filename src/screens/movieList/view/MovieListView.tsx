import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {MovieCardComponent} from '../../../components';
import AppProgressIndicator from '../../../components/progressIndicator/AppProgressIndicator';
import {MoviesDataContent} from '../../../types/response/moviesListResponse';
import {Status} from '../../../util/constants';

type MovieListViewProps = {
  movies: MoviesDataContent[];
  initialLoading: boolean;
  listViewOnEndReached(): void;
  status: Status;
  isEnd: boolean;
};

const MovieListView = (props: MovieListViewProps) => {
  const {movies, initialLoading, listViewOnEndReached, isEnd, status} = props;

  const renderFotterLoader = () => {
    if (!isEnd && status !== Status.error) {
      return <AppProgressIndicator />;
    } else {
      return <></>;
    }
  };

  return (
    <SafeAreaView style={!initialLoading ? undefined : styles.loadingContent}>
      {initialLoading ? (
        <AppProgressIndicator />
      ) : (
        <FlatList
          data={movies}
          renderItem={({item, index}) => (
            <MovieCardComponent data={item} index={index + 1} />
          )}
          keyExtractor={item => item.poster_path ?? ''}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFotterLoader}
          onEndReached={listViewOnEndReached}
        />
      )}

      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieListView;
