import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const {container, buttonText, disabledStyle, disabledText} = styles;

const ButtonView = ({
  title,
  isDisabled,
  btnStyle,
  btnTextStyle,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onButtonPress()}
      style={[container, btnStyle, isDisabled ? disabledStyle : {}]}
      activeOpacity={0.7}>
      <Text style={[buttonText, btnTextStyle, isDisabled ? disabledText : {}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

ButtonView.defaultProps = {
  onButtonPress: () => {},
  title: '',
  isDisabled: false,
};

export default React.memo(ButtonView);
