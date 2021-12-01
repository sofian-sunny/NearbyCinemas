import React from 'react';
import {Image, View} from 'react-native';
import {BACK_ICON} from '../../../assets';
import styles from './style';

const {image, container} = styles;

const BackButton = () => {
  return (
    <View style={container}>
      <Image source={BACK_ICON} style={image} />
    </View>
  );
};

export default BackButton;
