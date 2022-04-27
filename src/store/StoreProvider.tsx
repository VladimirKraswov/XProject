import type {FC, ReactNode} from 'react';
import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistStore} from './store';

interface IStoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<IStoreProviderProps> = ({children}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore}>
      {children}
    </PersistGate>
  </Provider>
);

export {StoreProvider};
