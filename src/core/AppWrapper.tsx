import React, {FC} from 'react';

import {Dimensions} from 'react-native';

import {Navigation} from '@src/navigation';

const SCREEN_WIDTH = Dimensions.get('window');
const SCREEN_HEIGHT = Dimensions.get('window');
const SCREEN_PADDING = 20;

const AppWrapper: FC = () => {
  return <Navigation />;
};

export {AppWrapper, SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_PADDING};
