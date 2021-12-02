import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';
import colors from '../../../theme/colors';

const {disabledColor} = colors;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: moderateScale(20),
    marginTop: verticalScale(10),
    borderRadius: 5,
  },
  titleTextStyle: {
    fontSize: moderateScale(20),
  },
  subTitleTextStyle: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(10),
  },
  separatorStyle: {
    marginVertical: verticalScale(10),
    backgroundColor: disabledColor,
    height: verticalScale(1),
  },
  imageStyle: {
    width: scale(80),
    height: verticalScale(90),
  },
  cardTopContainer: {
    flexDirection: 'row',
  },
  movieDetailsContainer: {
    flex: 1,
    marginLeft: scale(20),
  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabel: {
    fontSize: moderateScale(12),
  },
  bottomLabelValue: {
    fontSize: moderateScale(20),
  },
});
