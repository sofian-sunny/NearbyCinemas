import React, {useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {BackButton, OnPressWrapper} from '../../components/atoms';
import {
  fetchMovieDetailsAction,
  bookSelectedMovieAction,
} from '../../stores/actions';
import {defaultMovieGlueHeader} from '../../utils/constants';
import {MainRoutes} from '../../navigation/routes';
import {RootState} from '../../stores/reducers';
import {MovieDetailsFooter} from '../../components/organisms';
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
    if (!isLoading || isErrorInLoadingApi) {
      return null;
    }

    return <ActivityIndicator style={loaderContainer} />;
  };
  const onPressBackButton = () => {
    navigation.goBack();
  };

  const onPressBookNow = () => {
    const cinemaItem = route?.params?.cinemaItem;
    const {film_name, images, show_dates, film_id, duration_mins} =
      movieDetailsResult;
    const {address, address2, cinema_name, city} = cinemaItem;
    const {bookedMoviesList} = movieDetailsResponse;

    let selectedIndexItem = bookedMoviesList.find(
      item => item.film_id === film_id,
    );

    const bookingItem = {
      film_name,
      images,
      show_dates,
      film_id,
      duration_mins,
      address,
      address2,
      cinema_name,
      city,
      ticketCount: 1,
    };
    if (!selectedIndexItem || selectedIndexItem?.ticketCount < 2) {
      dispatch(bookSelectedMovieAction(bookingItem));
      navigation.navigate(MainRoutes.TicketHistoryScreen, {
        cinemaItem: cinemaItem,
      });
    } else {
      alert('You booked 10 tickets');
    }
  };

  const renderBackgroundImage = () => {
    // get poster image for the selected movie
    const moviePosterImg =
      movieListItem?.images?.poster?.['1']?.medium?.film_image;
    const {film_name} = movieListItem;

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
              <MovieDetailsFooter
                imageIcon={PLAY_ICON}
                title={film_name}
                imageStyle={playIcon}
                titleStyle={titleStyle}
                movieDetailsResult={movieDetailsResult}
                onPressBookNow={onPressBookNow}
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
