import { HomeTabIcon, HomeTabIconActive, ProfileTabIcon, ProfileTabIconActive, ReceiptTabIcon, ReceiptTabIconActive } from '@/assets/icons';
import { AppBox } from '@/shared';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function TabLayout() {

  function TabBarTransparentSvg() {
    return (
      <AppBox style={StyleSheet.absoluteFillObject}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
          style={{ backgroundColor: 'transparent' }}
        >
          <Path
            d="M0 20 Q 200 0 400 20 L 400 70 L 0 70 Z"
            fill="rgba(255, 255, 255, 0.8)" 
          />
        </Svg>
      </AppBox>
    );
  }

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 0,
          height: 70,
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        },
        headerShown: false,
        tabBarLabelVisibilityMode: 'unlabeled',
        tabBarBackground: () => <TabBarTransparentSvg />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => focused ? <HomeTabIconActive /> : <HomeTabIcon />,
        }}
      />
      <Tabs.Screen
        name="receipt"
        options={{
          tabBarIcon: ({ focused }) => focused ? <ReceiptTabIconActive /> : <ReceiptTabIcon />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => focused ? <ProfileTabIconActive /> : <ProfileTabIcon />,
        }}
      />
      <Tabs.Screen
        name="custom"
        options={{
          title: 'Custom',
          tabBarLabel: 'Custom',
          // tabBarButton: SpecialTabButton
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log('tabPress');
          }
        }}
      />
    </Tabs>
  );
}
