import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {MovieCardComponent} from '../../../components';
import {dummyData} from '../../../util/dummydata';

const MovieListView = () => (
  <SafeAreaView>
    <FlatList
      data={dummyData.results}
      renderItem={({item, index}) => (
        <MovieCardComponent data={item} index={index + 1} />
      )}
      keyExtractor={(item, _) => String(item.id)}
    />
  </SafeAreaView>
);

export default MovieListView;
