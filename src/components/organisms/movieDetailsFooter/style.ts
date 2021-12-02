import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: verticalScale(10),
    justifyContent: 'flex-end',
    alignItem: 'center',
  },
});
