import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/navigation/Main';
import {Provider} from 'react-redux';
import configureStore from './src/stores/configureStore';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
