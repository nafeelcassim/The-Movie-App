import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MoviesDataContent} from '../../types/response/moviesListResponse';
import {appConstants} from '../../util/constants';
import {getImage} from '../../util/utils';

type MovieCardProps = {
  data: Partial<MoviesDataContent>;
};

const MovieCard = (props: MovieCardProps) => {
  const {data} = props;
  const [imageUrl, setImageUrl] = useState<string>(
    getImage(false, data.poster_path),
  );
  return (
    <View style={styles.card}>
      <View style={styles.progress} />
      <View style={styles.cardContainer}>
        <Image
          onError={() => {
            setImageUrl(getImage(true));
          }}
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
          alt={data.title}
        />
        <View style={styles.contentData}>
          <Text style={styles.originalTitle}>
            {`#1 ${data.original_title ?? appConstants.notAvailableString}`}
          </Text>
          <Text style={styles.title}>{`(${
            data.title ?? appConstants.notAvailableString
          })`}</Text>

          <View style={styles.otherContentRow}>
            <Text style={styles.otherContent}>{`${data.release_date} (${
              data.original_language ?? appConstants.notAvailableString
            })`}</Text>
            <View style={styles.circleView} />
            <View style={styles.adultBorder}>
              <Text adjustsFontSizeToFit={true} style={styles.adultBorderText}>
                {data.adult ? 'R' : 'All'}
              </Text>
            </View>
          </View>

          <Text
            ellipsizeMode="tail"
            numberOfLines={4}
            style={styles.otherContent}>
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
    color: 'grey',
    fontWeight: '600',
  },
  otherContentRow: {
    marginTop: 4,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  otherContent: {
    color: 'grey',
    fontWeight: '300',
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
    color: 'grey',
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
