import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {ButtonView} from '../../atoms';
import {en} from '../../../i18n';
import styles from './style';

const {book_ticket, share} = en;
const {container, btnStyle, btnBookStyle, btnTextStyle, btnBookTextStyle} =
  styles;

const DetailsBottomView: FunctionComponent = () => {
  const onPressBookTicket = () => {};

  const onPressShare = () => {};

  return (
    <View style={container}>
      <ButtonView
        title={book_ticket}
        onPress={onPressBookTicket}
        btnStyle={btnBookStyle}
        btnTextStyle={btnBookTextStyle}
      />
      <ButtonView
        title={share}
        onPress={onPressShare}
        btnStyle={btnStyle}
        btnTextStyle={btnTextStyle}
      />
    </View>
  );
};

export default DetailsBottomView;
