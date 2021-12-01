import Config from 'react-native-config';

export const apiEndPoints = {
  summary: 'summary',
  world: 'world',
};

// Movie Glu Headers
const MOVIE_GLU_API = Config.MOVIE_API;

let defaultMovieGlueHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'api-version': 'v200',
  territory: 'XX',
  Authorization: Config.AUTH,
  client: Config.USERNAME,
  'x-api-key': Config.API_KEY,
  geolocation: '',
  'device-datetime': '2021-12-01T08:30:17.360Z',
};

export {defaultMovieGlueHeader, MOVIE_GLU_API};
