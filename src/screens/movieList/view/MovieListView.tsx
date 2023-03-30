import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {
  MovieCardComponent,
  NoDataViewComponent,
  ProgressIndicatorComponent,
} from '../../../components';

import {MoviesDataContent} from '../../../types/response/moviesListResponse';
import {appStrings, Status} from '../../../util/constants';

type MovieListViewProps = {
  movies: MoviesDataContent[];
  initialLoading: boolean;
  listViewOnEndReached(): void;
  onRefresh(): void;
  status: Status;
  isEnd: boolean;
};

const MovieListView = (props: MovieListViewProps) => {
  // Destructure the props
  const {
    movies,
    initialLoading,
    listViewOnEndReached,
    isEnd,
    status,
    onRefresh,
  } = props;

  const renderFotterLoader = () => {
    if (!isEnd && status !== Status.error) {
      return <ProgressIndicatorComponent />;
    } else {
      return <></>;
    }
  };

  return (
    <SafeAreaView
      style={!initialLoading ? styles.safeArea : styles.loadingContent}>
      {initialLoading ? (
        <ProgressIndicatorComponent />
      ) : status === Status.error && movies.length === 0 ? (
        <>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            refreshControl={
              <RefreshControl
                refreshing={initialLoading}
                onRefresh={() => onRefresh()}
              />
            }>
            <NoDataViewComponent title={appStrings.noDataAvailable} />
          </ScrollView>
        </>
      ) : (
        <FlashList
          data={movies}
          renderItem={({item, index}) => (
            <MovieCardComponent data={item} index={index + 1} />
          )}
          estimatedItemSize={400}
          keyExtractor={item => String(item.id) ?? ''}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFotterLoader}
          onEndReached={listViewOnEndReached}
          getItemType={item => {
            return item.id;
          }}
          refreshControl={
            <RefreshControl
              refreshing={initialLoading}
              onRefresh={() => onRefresh()}
            />
          }
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
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default MovieListView;
