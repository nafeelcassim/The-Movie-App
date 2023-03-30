import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MoviesDataContent} from '../../types/response/moviesListResponse';
import {commonStyles} from '../../util/commonStyles';
import {appConstants} from '../../util/constants';
import {getImage} from '../../util/utils';
import CircularProgress from '../circularProgress/CircularProgress';
import OtherContentRow from './OtherContentRow';

type MovieCardProps = {
  data: Partial<MoviesDataContent>;
  index: number;
};

const MovieCard = (props: MovieCardProps) => {
  const {data, index} = props;
  return (
    <View style={styles.card}>
      <CircularProgress
        size={40}
        strokeWidth={3}
        text={`${Math.round(
          (data.popularity ?? 0) > 100 ? 100 : data.popularity ?? 0,
        )}%`}
        progressPercent={Math.round(data.popularity ?? 0)}
        pgColor="green"
        textColor="white"
      />

      <View style={styles.cardContainer}>
        <ImageBackground source={require('../../images/no_image.png')}>
          <FastImage
            style={styles.image}
            source={{
              uri: getImage(false, data.poster_path),
            }}
          />
        </ImageBackground>

        <View style={styles.contentData}>
          <Text style={styles.originalTitle}>
            {`#${index} ${
              data.original_title ?? appConstants.notAvailableString
            }`}
          </Text>
          <Text style={styles.title}>{`(${
            data.title ?? appConstants.notAvailableString
          })`}</Text>
          <OtherContentRow
            releaseData={data.release_date}
            originalLanguage={data.original_language}
            isAdult={data.adult}
          />
          <Text
            ellipsizeMode="tail"
            numberOfLines={4}
            style={commonStyles.otherContent}>
            {data.overview ?? appConstants.notAvailableString}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  contentData: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },

  originalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 14,
    ...commonStyles.fontColor,
    fontWeight: '600',
  },
  otherContentRow: {
    marginTop: 4,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  circleView: {
    height: 4,
    width: 4,
    borderRadius: 30,
    backgroundColor: 'grey',
    marginLeft: 5,
  },
  adultBorder: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'grey',
    padding: 1,
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adultBorderText: {
    fontSize: 11,
    ...commonStyles.fontColor,
  },
  progress: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: 'grey',
    zIndex: 1,
    position: 'absolute',
    bottom: 4,
    left: 65,
  },
});

export default MovieCard;
