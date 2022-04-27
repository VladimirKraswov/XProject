import React, {FC} from 'react';

import MMKVStorage from 'react-native-mmkv-storage';

import {AppProvider} from './AppProvider';

const Storage = new MMKVStorage.Loader().initialize();

const App: FC = () => {
  return <AppProvider />;
};

export {App, Storage};
