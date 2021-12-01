import {StyleSheet} from 'react-native';
import colors from '../..//../theme/colors';
import {moderateScale, verticalScale, scale} from '../../../utils/scaling';

const {black} = colors;
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: black,
    opacity: 0.3,
    marginTop: verticalScale(60),
    marginLeft: scale(10),
    width: scale(40),
    padding: moderateScale(8),
  },
  image: {
    width: scale(24),
    height: verticalScale(24),
  },
});
