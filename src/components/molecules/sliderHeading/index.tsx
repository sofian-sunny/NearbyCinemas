import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../../atoms';
import styles from './style';

const {container, leftTextStyle, rightTextStyle} = styles;

const HeadingRow = ({leftText, rightText}) => {
  return (
    <View style={container}>
      <CustomText style={leftTextStyle} textType="regular">
        {leftText}
      </CustomText>
      <CustomText style={rightTextStyle} textType="regular">
        {rightText}
      </CustomText>
    </View>
  );
};

HeadingRow.defaultProps = {
  leftText: '',
  rightText: '',
};

export default HeadingRow;
