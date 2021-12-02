import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {
  fetchNearbyCinemasAction,
  fetchCinemaMoviesAction,
} from '../../stores/actions';
import {MainRoutes} from '../../navigation/routes';
import {DropDownItem} from '../../type/type';
import {RootState} from '../../stores/reducers';
import {DropdownView} from '../../components/atoms';
import {defaultMovieGlueHeader} from '../../utils/constants';
import {sortCinemasByDistance} from '../../utils/helper';
import {scale} from '../../utils/scaling';
import commonStyles from '../../styles';
import styles from './style';

const {width} = Dimensions.get('window');
const {container} = commonStyles;
const {image, imageContainer, slide, sliderContainer} = styles;

const moment = require('moment');

const HomeScreen = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigation = useNavigation<homeScreenProp>();

  const [dropDownCinemaItems, setDropdownCinemaItems] =
    useState<DropDownItem[]>();
  const [selectedCinemaItem, setSelectedCinemaItem] = useState(0);
  const [isCinemaDropdownOpen, setCinemaDropdownOpen] = useState(false);

  // get nearby cinema state response
  const nearByCinemasResponse = useSelector(
    (state: RootState) => state.nearbyCinemasReducer,
  );

  // get cinema movie state response
  const cinemaMoviesResponse: CinemaMovies = useSelector(
    (state: RootState) => state?.cinemaMoviesReducer?.cinemaMoviesResult,
  );

  useEffect(() => {
    let headers = defaultMovieGlueHeader;
    headers.geolocation = '-22.0;14.0';
    const payload = {url: 'cinemasNearby/?n=5', headers: headers};
    // dispatch nearbyCinema api
    dispatch(fetchNearbyCinemasAction(payload));
  }, [dispatch]);

  useEffect(() => {
    if (nearByCinemasResponse?.nearbyCinemasResult?.cinemas) {
      const {nearbyCinemasResult} = nearByCinemasResponse;
      const {cinemas} = nearbyCinemasResult;
      // create dropdown items array
      const dropDownItemsArray = sortCinemasByDistance(cinemas);
      setDropdownCinemaItems(dropDownItemsArray);
      // set selected cinema to zero position of sorted by distance array
      setSelectedCinemaItem(dropDownItemsArray[0].value);
    }
  }, [nearByCinemasResponse]);

  const onPressMovieItem = selectedMovieItem => {
    // navigate to the movie details page and pass selected movie item
    navigation.navigate(MainRoutes.DetailScreen, {
      movieListItem: selectedMovieItem,
    });
  };

  useEffect(() => {
    let headers = defaultMovieGlueHeader;
    const date = moment().format('YYYY-MM-DD');
    const payload = {
      url: `cinemaShowTimes/?cinema_id=${selectedCinemaItem}&date=${date}`,
      headers: headers,
    };
    // dispatch selected cinema movies api
    dispatch(fetchCinemaMoviesAction(payload));
  }, [selectedCinemaItem, dispatch]);

  // render slider item
  const _renderItem = ({item}, parallaxProps) => {
    const moviePoster = item?.images?.poster?.['1']?.medium?.film_image;
    const selectedItem = {...item};
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPressMovieItem(selectedItem)}>
        <View style={slide}>
          <ParallaxImage
            source={{uri: moviePoster}}
            containerStyle={imageContainer}
            style={image}
            parallaxFactor={0.2}
            {...parallaxProps}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderCarousel = () => {
    const itemsSize = cinemaMoviesResponse?.films?.length;
    if (!itemsSize) {
      return null;
    }

    return (
      <Carousel
        sliderWidth={width}
        sliderHeight={width}
        firstItem={itemsSize > 2 ? 1 : 0}
        itemWidth={scale(200)}
        data={cinemaMoviesResponse?.films}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
    );
  };

  console.log('dropDownCinemaItems ', dropDownCinemaItems);

  return (
    <View style={container}>
      <SafeAreaView>
        <DropdownView
          items={dropDownCinemaItems}
          selectedValue={selectedCinemaItem}
          isOpen={isCinemaDropdownOpen}
          setOpenCallback={setCinemaDropdownOpen}
          setDropdownValueCallback={setSelectedCinemaItem}
        />
        <View style={sliderContainer}>{renderCarousel()}</View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
