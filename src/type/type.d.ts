export interface ICinema {
  cinema_id: number;
  cinema_name: string;
  address: string;
  city: string;
  county: string;
  postcode: string;
  lat: number;
  lng: number;
  distance: number;
  logo_url: string;
  state: string;
  address2: string;
}

export interface ApiStatus {
  count: number;
  state: string;
  method: string;
  message: string;
  request_method: string;
  version: string;
  territory: string;
  device_datetime_sent: string;
  device_datetime_used: string;
}

export type NearbyCinemas = {
  cinemas: ICinema[];
  status: ApiStatus;
};

export type DropDownItem = {
  label: string;
  value: number;
};

export interface ApiCallState {
  isLoading: boolean;
  isErrorInLoadingApi: boolean;
  errorMessage: string;
}

export type NearbyCinemasResponse = {
  nearbyCinemasResult: NearbyCinemas;
};

export interface CinemaMovies {
  cinema: Cinema;
  films?: (FilmsEntity)[] | null;
  status: ApiStatus;
}
export interface Cinema {
  cinema_id: number;
  cinema_name: string;
}
export interface FilmsEntity {
  film_id: number;
  imdb_id: number;
  imdb_title_id: string;
  film_name: string;
  other_titles?: null;
  version_type: string;
  age_rating?: (AgeRatingEntity)[] | null;
  images: Images;
  showings: Showings;
  show_dates?: (ShowDatesEntity)[] | null;
}
export interface AgeRatingEntity {
  rating: string;
  age_rating_image: string;
  age_advisory: string;
}
export interface Images {
  poster: Poster;
  still?: Still | null;
}
export interface Poster {
  1: 1;
}
export interface 1 {
  image_orientation: string;
  region: string;
  medium: Medium;
}
export interface Medium {
  film_image: string;
  width: number;
  height: number;
}
export interface Still {
  1: 11;
}
export interface 11 {
  image_orientation: string;
  medium: Medium;
}
export interface Showings {
  Standard: Standard;
}
export interface Standard {
  film_id: number;
  film_name: string;
  times?: (TimesEntity)[] | null;
}
export interface TimesEntity {
  start_time: string;
  end_time: string;
}
export interface ShowDatesEntity {
  date: string;
}

export interface Geolocation {
  lat: number;
  lng: number;
}

export interface MovieDetails {
  film_id: number;
  imdb_id: number;
  imdb_title_id: string;
  film_name: string;
  other_titles: OtherTitles;
  version_type: string;
  images: Images;
}
export interface OtherTitles {
  EN: string;
}
export interface Images {
  poster: Poster;
  still: Still;
  synopsis_long: string;
  distributor_id: number;
  distributor: string;
  release_dates?: (ReleaseDatesEntity)[] | null;
  age_rating?: (AgeRatingEntity)[] | null;
  duration_mins: number;
  review_stars: number;
  review_txt: string;
  trailers: Trailers;
  genres?: (GenresEntity)[] | null;
  cast?: (CastEntity)[] | null;
  directors?: (DirectorsEntity)[] | null;
  producers?: (ProducersEntity)[] | null;
  writers?: (WritersEntity)[] | null;
  show_dates?: (ShowDatesEntity)[] | null;
  alternate_versions?: (AlternateVersionsEntity)[] | null;
  status: ApiStatus;
}
export interface Poster {
  1: 1;
}
export interface 1 {
  image_orientation: string;
  region: string;
  medium: Medium;
}
export interface Medium {
  film_image: string;
  width: number;
  height: number;
}
export interface Still {
  1: 1Or2;
  2: 1Or2;
}
export interface 1Or2 {
  image_orientation: string;
  medium: Medium;
}
export interface ReleaseDatesEntity {
  release_date: string;
  notes: string;
}
export interface AgeRatingEntity {
  rating: string;
  age_rating_image: string;
  age_advisory: string;
}
export interface Trailers {
  high?: (HighEntityOrMedEntity)[] | null;
  med?: (HighEntityOrMedEntity)[] | null;
}
export interface HighEntityOrMedEntity {
  film_trailer: string;
  trailer_image: string;
  version: number;
  quality: string;
  region: string;
}
export interface GenresEntity {
  genre_id: number;
  genre_name: string;
}
export interface CastEntity {
  cast_id: number;
  cast_name: string;
}
export interface DirectorsEntity {
  director_id: number;
  director_name: string;
}
export interface ProducersEntity {
  producer_id: number;
  producer_name: string;
}
export interface WritersEntity {
  writer_id: number;
  writer_name: string;
}
export interface ShowDatesEntity {
  date: string;
}
export interface AlternateVersionsEntity {
  film_id: number;
  film_name: string;
  version_type: string;
}

