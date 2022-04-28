import React, {FC} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, AboutScreen} from '@src/ui/screens';

const RightDrawer = createDrawerNavigator();

const MainStack = createStackNavigator();

const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen
        name="Home"
        component={props => <HomeScreen {...props} />}
        options={{
          title: 'Home',
        }}
      />
      <MainStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
        }}
      />
    </MainStack.Navigator>
  );
};

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <RightDrawer.Navigator
        backBehavior="initialRoute"
        initialRouteName="MainStackNavigator"
        detachInactiveScreens>
        <RightDrawer.Screen
          component={MainStackNavigator}
          name="MainStackNavigator"
        />
      </RightDrawer.Navigator>
    </NavigationContainer>
  );
};
