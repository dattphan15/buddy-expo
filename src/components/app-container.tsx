import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from '../theme';
import Main from './src/screens/main'

type Props = {
  children: React.ReactNo
}
 
export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}

