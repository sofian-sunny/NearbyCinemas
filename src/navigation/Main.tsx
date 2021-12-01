import React from 'react';
import {MainStack, MainRoutes} from './routes';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';

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
    </MainStack.Navigator>
  );
};
export default Main;
