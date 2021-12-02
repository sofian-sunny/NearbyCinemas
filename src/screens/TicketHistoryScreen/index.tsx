import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieHistoryCard} from '../../components/molecules';
import {RootState} from '../../stores/reducers';
import {timeConvertHourMins} from '../../utils/helper';
import commonStyles from '../../styles';

const {container} = commonStyles;
const moment = require('moment');

const TicketHistoryScreen = ({
  route,
}: DetailsScreenProps): React.ReactElement => {
  const [bookedMoviesListItems, setBookedMoviesList] = useState([]);
  // get movie details state response
  const movieDetailsResponse = useSelector(
    (state: RootState) => state?.movieDetailsReducer,
  );

  const cinemaItem = route?.params?.cinemaItem;

  console.log('cinemaItem ', cinemaItem);

  useEffect(() => {
    const {bookedMoviesList} = movieDetailsResponse;
    if (bookedMoviesList?.length) {
      setBookedMoviesList(bookedMoviesList);
    }
  }, [movieDetailsResponse]);

  const renderBookedMovieItem = ({item}) => {
    const {
      film_name,
      images,
      show_dates,
      film_id,
      duration_mins,
      address,
      address2,
      cinema_name,
      city,
      ticketCount,
    } = item;
    const moviePosterImg = images?.poster?.['1']?.medium?.film_image;
    const cinemaAddress = `${cinema_name} , ${address} ${address2} ${city}`;
    const showDate = show_dates?.length ? show_dates[0].date : '';
    const movieDuration = timeConvertHourMins(duration_mins);
    return (
      <MovieHistoryCard
        film_image={moviePosterImg}
        film_name={film_name}
        address={cinemaAddress}
        duration_mins={movieDuration}
        tickets={ticketCount}
        id={film_id}
        show_dates={moment(showDate).format('ddd, DD MMM  ')}
      />
    );
  };

  return (
    <View style={container}>
      <SafeAreaView>
        <FlatList
          data={bookedMoviesListItems}
          keyExtractor={item => `row-${item.ID}`}
          renderItem={renderBookedMovieItem}
          extraData={bookedMoviesListItems}
        />
      </SafeAreaView>
    </View>
  );
};

export default TicketHistoryScreen;
