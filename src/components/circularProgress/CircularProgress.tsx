import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Svg, Circle, Text as SVGText} from 'react-native-svg';

type CircilarProgressProp = {
  size: number;
  strokeWidth: number;
  text: string;
  progressPercent: number;
  bgColor?: string;
  pgColor?: string;
  textSize?: number;
  textColor?: string;
};

const CircularProgress = (props: CircilarProgressProp) => {
  const {size, strokeWidth, text, progressPercent} = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;

  return (
    <View style={{...styles.content, left: (135 - size) / 2}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={props.bgColor ? props.bgColor : '#f2f2f2'}
          fill="#002138"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        {/* Progress Circle */}
        <Circle
          stroke={props.pgColor ? props.pgColor : '#3b5998'}
          fill="#002138"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />

        {/* Text */}
        <SVGText
          fontSize={props.textSize ? props.textSize : '10'}
          x={size / 2}
          y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
          textAnchor="middle"
          fill={props.textColor ? props.textColor : '#333333'}>
          {text}
        </SVGText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 4,
  },
});

export default CircularProgress;
