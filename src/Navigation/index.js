import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './ScreenNames';
import HomeScreen from '../containers/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreatScreen from '../containers/Creat';
import DetailScreen from '../containers/Detail';

const Stack = createNativeStackNavigator();

function MainAppNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME_SCREEN}>
          <Stack.Screen
            name={SCREEN_NAMES.HOME_SCREEN}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREEN_NAMES.CREAT_SCREEN}
            component={CreatScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DETAIL_SCREEN}
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default MainAppNavigation;
