import {StoreProvider} from '@store';
import React, {FC} from 'react';

import {AppWrapper} from './AppWrapper';

const AppProvider: FC = () => {
  return (
    <StoreProvider>
      <AppWrapper />
    </StoreProvider>
  );
};

export {AppProvider};
