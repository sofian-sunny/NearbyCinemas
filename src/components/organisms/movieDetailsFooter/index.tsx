import React, {FunctionComponent} from 'react';
import {TextStyle, View} from 'react-native';
import {MovieDetailsCard, DetailsBottomView} from '../../molecules';
import styles from './style';

const {container} = styles;

type CustomProps = {
  imageIcon: string;
  title: string;
  titleStyle?: TextStyle;
  imageStyle?: TextStyle;
};
const MovieDetailsFooter: FunctionComponent<CustomProps> = ({
  imageIcon,
  title,
  titleStyle,
  imageStyle,
  movieDetailsResult,
  onPressBookNow,
}) => {
  return (
    <View style={container}>
      <MovieDetailsCard
        title={title}
        imageIcon={imageIcon}
        titleStyle={titleStyle}
        imageStyle={imageStyle}
        movieDetailsResult={movieDetailsResult}
      />
      <DetailsBottomView onPressBookNow={onPressBookNow} />
    </View>
  );
};

export default MovieDetailsFooter;
