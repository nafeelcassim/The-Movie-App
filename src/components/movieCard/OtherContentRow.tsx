import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {commonStyles} from '../../util/commonStyles';
import {appConstants} from '../../util/constants';

type OtherContentRowProps = {
  releaseData: string;
  isAdult: boolean;
  originalLanguage: string;
};

const OtherContentRow = (props: Partial<OtherContentRowProps>) => {
  const {releaseData, isAdult, originalLanguage} = props;
  return (
    <View style={styles.otherContentRow}>
      <Text style={commonStyles.otherContent}>{`${
        releaseData ?? appConstants.notAvailableString
      } (${originalLanguage ?? appConstants.notAvailableString})`}</Text>
      <View style={styles.circleView} />
      <View style={styles.adultBorder}>
        <Text adjustsFontSizeToFit={true} style={styles.adultBorderText}>
          {isAdult ? 'R' : 'All'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'grey',
  },
});

export default OtherContentRow;
