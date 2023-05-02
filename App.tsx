import React from 'react'
import MainScreen from './src/screens/main'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          drawerType: 'back',
          overlayColor: '#00000000',
        }}
      >
        <Drawer.Screen name="Main" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;