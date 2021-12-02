import {StyleSheet} from 'react-native';
import colors from '../..//../theme/colors';
import {moderateScale, verticalScale} from '../../../utils/scaling';

const {red, white, mako, black} = colors;

export default StyleSheet.create({
  container: {marginVertical: verticalScale(10)},
  title: {
    fontSize: moderateScale(22),
    color: mako,
  },
  btnStyle: {
    backgroundColor: white,
    marginBottom: verticalScale(10),
  },
  btnBookStyle: {
    backgroundColor: red,
    marginBottom: verticalScale(10),
  },
  btnTextStyle: {
    color: black,
  },
  btnBookTextStyle: {
    color: white,
  },
});
