import React from 'react';
import {View, FlatList} from 'react-native';
import {MovieCardComponent} from '../../../components';
import {dummyData} from '../../../util/dummydata';

const MovieListView = () => (
  <View>
    <FlatList
      data={dummyData.results}
      renderItem={({item}) => <MovieCardComponent data={item} />}
      keyExtractor={(item, _) => String(item.id)}
    />
  </View>
);

export default MovieListView;
