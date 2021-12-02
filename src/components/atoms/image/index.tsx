import React from 'react';
import {Image} from 'react-native';

const ImageView = ({sourceIcon, style}) => (
  <Image source={sourceIcon} style={style} />
);

ImageView.defaultProps = {
  sourceIcon: '',
  style: {},
};

export default ImageView;
