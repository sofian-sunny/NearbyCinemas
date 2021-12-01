import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from '../../utils/scaling';
import colors from '../../theme/colors';

const {white} = colors;

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
    width: scale(36),
    height: verticalScale(36),
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(24),
    color: white,
    textAlign: 'center',
    margin: verticalScale(15),
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
