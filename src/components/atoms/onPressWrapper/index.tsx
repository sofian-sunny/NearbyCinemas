import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './style';
const {container} = styles;

const OnPressWrapper = ({children, onPressCallBack}) => {
  return (
    <TouchableOpacity style={container} onPress={() => onPressCallBack()}>
      {children}
    </TouchableOpacity>
  );
};

OnPressWrapper.defaultProps = {
  children: null,
  onPressCallBack: () => {},
};

export default React.memo(OnPressWrapper);
