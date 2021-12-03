import React, {FunctionComponent} from 'react';
import {TextStyle, View} from 'react-native';
import StarRating from 'react-native-star-rating';
import {CustomText, ImageView, OnPressWrapper} from '../../atoms';
import {timeConvertHourMins} from '../../../utils/helper';
import styles from './style';
import color from '../../../theme/colors';

const moment = require('moment');
const {container, subTitle, ratingContainer, titleText} = styles;

type CustomProps = {
  imageIcon: string;
  title: string;
  titleStyle?: TextStyle;
  imageStyle?: TextStyle;
};
const MovieDetailsCard: FunctionComponent<CustomProps> = ({
  imageIcon,
  title,
  titleStyle,
  imageStyle,
  movieDetailsResult,
  onPressPlayVideo,
}) => {
  const {release_dates, duration_mins, review_txt, review_stars} =
    movieDetailsResult;
  const releaseDate = release_dates?.[0].release_date;
  return (
    <View style={container}>
      <OnPressWrapper onPressCallBack={onPressPlayVideo}>
        <ImageView sourceIcon={imageIcon} style={imageStyle} />
      </OnPressWrapper>
      <CustomText style={titleText} textType="regular">
        {title}
      </CustomText>
      <CustomText style={titleStyle} textType="regular">
        {`${moment(releaseDate).format('YYYY')}   |   ${timeConvertHourMins(
          duration_mins,
        )}`}
      </CustomText>
      <StarRating
        containerStyle={ratingContainer}
        fullStarColor={color.yellow}
        disabled={true}
        maxStars={5}
        starSize={24}
        rating={review_stars}
      />
      <CustomText style={subTitle} textType="regular" maxLines={4}>
        {review_txt}
      </CustomText>
    </View>
  );
};

export default React.memo(MovieDetailsCard);
