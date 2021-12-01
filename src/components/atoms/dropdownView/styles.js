import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scaling';
import colors from '../../../theme/colors';
const {white} = colors;

export default StyleSheet.create({
  container: {
    minWidth: scale(200),
    borderColor: white,
  },
  contentContainer: {
    backgroundColor: white,
    minWidth: scale(200),
  },

  dropDownContainer: {
    backgroundColor: white,
    borderColor: '#f1f2f4',
  },
});
