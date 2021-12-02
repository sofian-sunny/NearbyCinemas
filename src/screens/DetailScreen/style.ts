import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../utils/scaling';
import colors from '../../theme/colors';

const {white, dark_gray} = colors;

export default StyleSheet.create({
  subContainer: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    paddingHorizontal: moderateScale(15),
  },
  text: {
    color: white,
    fontSize: moderateScale(24),
  },
  absolute: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    width: moderateScale(48),
    height: moderateScale(48),
    alignSelf: 'center',
    marginVertical: verticalScale(10),
  },
  titleStyle: {
    fontSize: moderateScale(24),
    color: dark_gray,
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
