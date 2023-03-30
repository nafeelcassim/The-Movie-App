import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type NoDataViewProps = {
  title: string;
};

const NoDataView = (props: NoDataViewProps) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NoDataView;
