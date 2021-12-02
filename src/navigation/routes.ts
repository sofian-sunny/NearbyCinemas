import {createStackNavigator} from '@react-navigation/stack';
import {FilmsEntity, ICinema} from '../stores/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum MainRoutes {
  DetailScreen = 'DetailScreen',
  Home = 'Home',
  TicketHistoryScreen = 'TicketHistoryScreen',
}

export type MainStackParamList = {
  [MainRoutes.DetailScreen]: {movieListItem: FilmsEntity; cinemaItem: ICinema};
  [MainRoutes.Home]: {cinemaItem: ICinema};
  [MainRoutes.TicketHistoryScreen]: undefined;
};
export type DetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  MainRoutes.DetailScreen,
  MainRoutes.TicketHistoryScreen
>;

export const MainStack = createStackNavigator<MainStackParamList>();
