import React, {useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {BackButton, OnPressWrapper} from '../../components/atoms';
import {fetchMovieDetailsAction} from '../../stores/actions';
import {defaultMovieGlueHeader} from '../../utils/constants';
import {RootState} from '../../stores/reducers';
import {MovieDetailsCard} from '../../components/molecules';
import {PLAY_ICON} from '../../assets';
import styles from './style';

const {bgImage, contentContainer, playIcon, titleStyle, loaderContainer} =
  styles;

const DetailScreen = ({route}: DetailsScreenProps): React.ReactElement => {
  // get selected movie item
  const movieListItem = route?.params?.movieListItem;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // get movie details state response
  const movieDetailsResponse = useSelector(
    (state: RootState) => state?.movieDetailsReducer,
  );

  const {isLoading, isErrorInLoadingApi, movieDetailsResult} =
    movieDetailsResponse;

  useEffect(() => {
    if (movieListItem) {
      const {film_id} = movieListItem;
      let headers = defaultMovieGlueHeader;
      const payload = {
        url: `filmDetails/?film_id=${film_id}`,
        headers: headers,
      };
      dispatch(fetchMovieDetailsAction(payload));
    }
  }, [movieListItem, dispatch]);

  // show activity indicator
  const showLoader = () => {
    if (isLoading && !isErrorInLoadingApi) {
      return null;
    }

    return <ActivityIndicator style={loaderContainer} />;
  };

  const renderBackgroundImage = () => {
    // get poster image for the selected movie
    const moviePosterImg =
      movieListItem?.images?.poster?.['1']?.medium?.film_image;

    const {film_name} = movieListItem;
    const onPressBackButton = () => {
      navigation.goBack();
    };

    return (
      <ImageBackground
        source={{uri: moviePosterImg}}
        resizeMode="cover"
        style={bgImage}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.container}>
          {showLoader()}
          <OnPressWrapper onPressCallBack={onPressBackButton}>
            <BackButton />
          </OnPressWrapper>
          <View style={contentContainer}>
            {movieDetailsResult && (
              <MovieDetailsCard
                imageIcon={PLAY_ICON}
                title={film_name}
                imageStyle={playIcon}
                titleStyle={titleStyle}
                movieDetailsResult={movieDetailsResult}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    );
  };

  return <View>{renderBackgroundImage()}</View>;
};

export default DetailScreen;
