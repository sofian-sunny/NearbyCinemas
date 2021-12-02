import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../../../utils/scaling';
import colors from '../../../theme/colors';

const {white} = colors;

export default StyleSheet.create({
  container: {
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    alignItem: 'center',
  },
  subTitle: {
    fontSize: moderateScale(16),
    color: white,
    textAlign: 'center',
    margin: verticalScale(15),
  },
});
