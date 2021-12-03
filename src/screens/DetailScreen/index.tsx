import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  ActivityIndicator,
  Modal,
  SafeAreaView,
  Share,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {
  BackButton,
  OnPressWrapper,
  VideoView,
  ImageView,
} from '../../components/atoms';
import {
  fetchMovieDetailsAction,
  bookSelectedMovieAction,
} from '../../stores/actions';
import {defaultMovieGlueHeader} from '../../utils/constants';
import {MainRoutes} from '../../navigation/routes';
import {RootState} from '../../stores/reducers';
import {MovieDetailsFooter} from '../../components/organisms';
import {PLAY_ICON, CROSS_ICON} from '../../assets';
import styles from './style';

const {
  container,
  bgImage,
  contentContainer,
  playIcon,
  titleStyle,
  loaderContainer,
  closeIcon,
  absolute,
} = styles;

const DetailScreen = ({route}: DetailsScreenProps): React.ReactElement => {
  // get selected movie item
  const movieListItem = route?.params?.movieListItem;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

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

  const onPressShare = () => {
    const {film_name} = movieDetailsResult;
    Share.share({
      message: `${film_name} `,
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
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
    if (!selectedIndexItem || selectedIndexItem?.ticketCount < 10) {
      dispatch(bookSelectedMovieAction(bookingItem));
      navigation.navigate(MainRoutes.TicketHistoryScreen, {
        cinemaItem: cinemaItem,
      });
    } else {
      alert('You booked 10 tickets');
    }
  };

  const onPressPlayVideo = () => {
    const {trailers} = movieDetailsResult;
    if (!trailers) {
      return alert('No trailer found!');
    }
    const videoURI = trailers?.high?.[0].film_trailer;
    if (videoURI) {
      setModalVisible(true);
    }
  };

  const renderVideoView = () => {
    if (!movieDetailsResult) {
      return null;
    }
    const {trailers} = movieDetailsResult;
    const videoURI = trailers?.high?.[0].film_trailer;
    return <VideoView paused={!modalVisible} uri={videoURI} />;
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
          style={absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
        <View style={container}>
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
                onPressPlayVideo={onPressPlayVideo}
                onPressShare={onPressShare}
              />
            )}
          </View>
          <SafeAreaView>
            <Modal
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <OnPressWrapper onPressCallBack={() => setModalVisible(false)}>
                <ImageView sourceIcon={CROSS_ICON} style={closeIcon} />
              </OnPressWrapper>
              {renderVideoView()}
            </Modal>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  };

  return <View>{renderBackgroundImage()}</View>;
};

export default DetailScreen;
