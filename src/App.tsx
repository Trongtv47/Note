import React from 'react';
import {Provider} from 'react-redux';
import MainAppNavigation from './Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainAppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
