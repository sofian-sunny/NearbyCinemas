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
  const nearByCinemasResponse = useSelector(
    (state: RootState) => state.nearbyCinemasReducer,
  );
  const cinemaMoviesResponse: CinemaMovies = useSelector(
    (state: RootState) => state?.cinemaMoviesReducer?.cinemaMoviesResult,
  );

  useEffect(() => {
    let headers = defaultMovieGlueHeader;
    headers.geolocation = '-22.0;14.0';
    const payload = {url: 'cinemasNearby/?n=5', headers: headers};
    dispatch(fetchNearbyCinemasAction(payload));
  }, [dispatch]);

  useEffect(() => {
    if (nearByCinemasResponse?.nearbyCinemasResult?.cinemas) {
      const {nearbyCinemasResult} = nearByCinemasResponse;
      const {cinemas} = nearbyCinemasResult;
      const dropDownItemsArray = sortCinemasByDistance(cinemas);
      setDropdownCinemaItems(dropDownItemsArray);
      setSelectedCinemaItem(dropDownItemsArray[0].value);
    }
  }, [nearByCinemasResponse]);

  const onPressMovieItem = selectedMovieItem => {
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
    dispatch(fetchCinemaMoviesAction(payload));
  }, [selectedCinemaItem, dispatch]);

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
