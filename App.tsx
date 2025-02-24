import React from 'react';

import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { persistor, store } from './src/store';

const App = (): React.JSX.Element => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <MainStackNavigator />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;