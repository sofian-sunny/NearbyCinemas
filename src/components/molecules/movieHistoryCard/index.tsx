import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import {Separator, CardView, CustomText} from '../../atoms';
import {en} from '../../../i18n';

const {
  container,
  imageStyle,
  separatorStyle,
  cardTopContainer,
  movieDetailsContainer,
  titleTextStyle,
  subTitleTextStyle,
  bottomRow,
  bottomLabel,
  bottomLabelValue,
  bottomLabelContainer,
} = styles;
const MovieHistoryCard = ({
  film_image,
  film_name,
  address,
  duration_mins,
  show_dates,
  tickets,
}) => {
  return (
    <CardView style={container}>
      <View style={cardTopContainer}>
        <Image style={imageStyle} source={{uri: film_image}} />
        <View style={movieDetailsContainer}>
          <CustomText style={titleTextStyle} textType="regular">
            {film_name}
          </CustomText>
          <CustomText style={subTitleTextStyle} textType="regular">
            {show_dates}
          </CustomText>
          <CustomText style={subTitleTextStyle} textType="regular">
            {address}
          </CustomText>
        </View>
      </View>
      <Separator style={separatorStyle} />
      <View style={bottomRow}>
        <View style={bottomLabelContainer}>
          <CustomText style={bottomLabelValue} textType="regular">
            {tickets}
          </CustomText>
          <CustomText style={bottomLabel} textType="regular">
            {en.tickets}
          </CustomText>
        </View>
        <View style={bottomLabelContainer}>
          <CustomText style={bottomLabelValue} textType="regular">
            {duration_mins}
          </CustomText>
          <CustomText style={bottomLabel} textType="regular">
            {en.duration}
          </CustomText>
        </View>
      </View>
    </CardView>
  );
};

export default React.memo(MovieHistoryCard);
