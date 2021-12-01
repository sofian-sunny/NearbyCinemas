import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../..//theme/colors';
import {moderateScale, verticalScale, scale} from '../../utils/scaling';
const {width} = Dimensions.get('window');

const {turquoise} = colors;

export default StyleSheet.create({
  subContainer: {
    flex: 1,
  },
  viewMoreContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: verticalScale(5),
  },
  viewMore: {
    width: '100%',
    fontSize: moderateScale(18),
    color: turquoise,
    textAlign: 'right',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  item: {
    width: width - verticalScale(60),
    height: width - scale(60),
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: moderateScale(8),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  slide: {
    width: scale(200),
    height: verticalScale(250),
  },
  sliderContainer: {
    marginVertical: verticalScale(20),
  },
});
