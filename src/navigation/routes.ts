import {createStackNavigator} from '@react-navigation/stack';
import {FilmsEntity} from '../stores/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum MainRoutes {
  DetailScreen = 'DetailScreen',
  Home = 'Home',
}

export type MainStackParamList = {
  [MainRoutes.DetailScreen]: {movieListItem: FilmsEntity};
  [MainRoutes.Home]: undefined;
};
export type DetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  MainRoutes.DetailScreen
>;

export const MainStack = createStackNavigator<MainStackParamList>();
