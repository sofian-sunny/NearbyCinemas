import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/scaling';
import colors from '../../../theme/colors';
import {fontFamily} from '../../../theme/fonts';

const {blue_color, black} = colors;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
  },
  leftTextStyle: {
    fontSize: moderateScale(18),
    color: black,
    fontFamily: fontFamily.bold,
  },
  rightTextStyle: {
    fontSize: moderateScale(18),
    color: blue_color,
  },
});
