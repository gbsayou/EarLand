import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import MudicIcon from './assets/icons/music.js';
import ProfileIcon from './assets/icons/profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const tabs = [
  {
    name: 'Home',
    component: Home,
    options: () => ({
      title: 'All Sounds',
      tabBarIcon: ({focused}) => {
        return <MudicIcon color={focused ? 'black' : 'grey'} />;
      },
    }),
  },
  {
    name: 'Settings',
    component: Settings,
    options: () => ({
      title: 'Settings',
      tabBarIcon: ({focused}) => {
        return <ProfileIcon color={focused ? 'black' : 'grey'} />;
      },
    }),
  },
];

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
      },
    })}>
    {tabs.map(tab => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={tab.options}
      />
    ))}
  </Tab.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="feedback"
            component={Feedback}
            options={{headerBackTitle: 'back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
