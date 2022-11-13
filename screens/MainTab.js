import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from '../components/SearchHeader';

const Tab = createBottomTabNavigator();

function MainTab() {
  const [keyword, setKeyword] = useState('');
  return (
    <Tab.Navigator
      screenOptions={{ showLabel: false, activeTintColor: '#009688' }}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{ keyword: keyword }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => (
            <SearchHeader keyword={keyword} setKeyword={setKeyword} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
