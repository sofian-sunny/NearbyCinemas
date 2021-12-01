import {ICinema} from '../type/type';

const sortCinemasByDistance = (data: ICinema[]) => {
  const sortedData = data?.sort((a, b) => {
    return a.distance - b.distance;
  });

  const dropdownItems = sortedData.map((item: ICinema) => {
    return {
      label: item.cinema_name,
      value: item.cinema_id,
    };
  });
  return dropdownItems;
};

const timeConvertHourMiins = timeInMins => {
  var hours = timeInMins / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  return rhours.toFixed() + 'h  ' + minutes.toFixed() + 'm';
};

export {sortCinemasByDistance, timeConvertHourMiins};
