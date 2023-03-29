import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieListView} from '../screens';

const Stack = createStackNavigator();

const screenNames = {
  movieListView: 'MovieList',
};

const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.movieListView}
          component={MovieListView}
          options={{
            title: 'Top Rated Movies',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#002138',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
