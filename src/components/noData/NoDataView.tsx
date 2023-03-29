import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoDataView = () => {
  return (
    <View style={styles.container}>
      <Text>No Data Available</Text>
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
