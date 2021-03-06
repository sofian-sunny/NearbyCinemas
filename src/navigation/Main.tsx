import React from 'react';
import {MainStack, MainRoutes} from './routes';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import TicketHistoryScreen from '../screens/TicketHistoryScreen';
import {en} from '../i18n';

const Main = (): React.ReactElement => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={MainRoutes.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={MainRoutes.DetailScreen}
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={MainRoutes.TicketHistoryScreen}
        component={TicketHistoryScreen}
        options={{
          headerShown: true,
          title: en.ticket,
          headerBackTitle: '',
        }}
      />
    </MainStack.Navigator>
  );
};
export default Main;
