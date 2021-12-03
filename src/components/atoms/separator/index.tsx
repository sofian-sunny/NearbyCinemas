import React from 'react';
import {View} from 'react-native';
import commonStyles from '../../../styles';

const {separatorStyle} = commonStyles;

const Separator = ({style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return <View style={[separatorStyle, {...passedStyles}]} />;
};

Separator.defaultProps = {
  style: {},
};

export default React.memo(Separator);
