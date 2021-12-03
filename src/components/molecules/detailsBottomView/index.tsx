import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {ButtonView} from '../../atoms';
import {en} from '../../../i18n';
import styles from './style';

const {book_ticket, share} = en;
const {container, btnStyle, btnBookStyle, btnTextStyle, btnBookTextStyle} =
  styles;

const DetailsBottomView: FunctionComponent = ({
  onPressBookNow,
  onPressShare,
}) => {
  return (
    <View style={container}>
      <ButtonView
        title={book_ticket}
        btnStyle={btnBookStyle}
        btnTextStyle={btnBookTextStyle}
        onButtonPress={onPressBookNow}
        isDisabled={false}
      />
      <ButtonView
        title={share}
        btnStyle={btnStyle}
        btnTextStyle={btnTextStyle}
        onButtonPress={onPressShare}
        isDisabled={false}
      />
    </View>
  );
};

export default React.memo(DetailsBottomView);
