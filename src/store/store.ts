import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore as createPersistStore,
  PersistConfig,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AppStorage} from '@src/core';

import {ITestSlice, testSlice} from './slice';

interface IStoreReducers {
  testSlice: ITestSlice;
}

const persistConfig: PersistConfig<IStoreReducers> = {
  key: 'root',
  version: 1,
  storage: AppStorage,
  whitelist: ['testSlice'],
};

const reducer = combineReducers({
  testSlice: testSlice.reducer,
});

const persistedReducer = persistReducer<IStoreReducers>(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistStore = createPersistStore(store);

export {store, persistStore};
export type {IStoreReducers};
