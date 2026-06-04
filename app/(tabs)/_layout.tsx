import { HomeTabIcon, HomeTabIconActive } from '@/assets/icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 0,
          height: 70,
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        },
        headerShown: false,
        tabBarLabelVisibilityMode: 'unlabeled'
        // tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => focused ? <HomeTabIconActive /> : <HomeTabIcon />,
        }}
      />
    </Tabs>
  );
}
