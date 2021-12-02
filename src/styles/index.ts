import {StyleSheet} from 'react-native';
import colors from '../theme/colors';
import {moderateScale, verticalScale} from '../utils/scaling';
const {lightGray} = colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_bg,
    paddingHorizontal: moderateScale(15),
  },
  separatorStyle: {
    width: '100%',
    backgroundColor: lightGray,
    height: verticalScale(1),
  },
});
