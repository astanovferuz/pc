import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { List } from '../screens/List';
import { TextDemo, ButtonDemo, FormDemo } from '../screens/Demos';
import colors from '../constants/colors';

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Main = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Sign In"
      component={FormDemo}
      options={{ 
        headerTitle: 'Property Check',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: colors.green,
        },
        headerTintColor: '#fff',
      }}
    />
    <Drawer.Screen name="Home" component={List} 
       options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: colors.green,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Drawer.Screen
      name="All Properties"
      component={TextDemo}
      options={{
        title: 'All Properties',
        headerStyle: {
          backgroundColor: colors.green,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    {/* <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo' }}
    /> */}
  </Drawer.Navigator>
);
