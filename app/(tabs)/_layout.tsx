import { HomeTabIcon, HomeTabIconActive, PlusIcon, ProfileTabIcon, ProfileTabIconActive, ReceiptTabIcon, ReceiptTabIconActive } from '@/assets/icons';
import { AppBox } from '@/shared';
import { useRouter, Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Svg, { Defs, Mask, Path, Polygon, Rect } from 'react-native-svg';

export default function TabLayout() {
  const router = useRouter();
  const { width } = Dimensions.get('window');


  function TempTabButton() {
    return (
      <AppBox className='bg-brand size-16 justify-center items-center rounded-lg -rotate-45 bottom-1/2'>
        <PlusIcon style={{ transform: [{ rotate: '45deg' }], }} />
      </AppBox>
    )
  }

  function TabBarTransparentSvg() {
    return (
      <AppBox />
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 0,
          height: 80,
          boxShadow: '0px 0px 20px rgba(176, 176, 176, 0.25)'
        },
        tabBarIconStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerShown: false,
        tabBarLabelVisibilityMode: 'unlabeled',
        // tabBarBackground: () => <TabBarTransparentSvg />,
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
        name="create-vc-redirect"
        options={{
          title: 'Create VC',
          tabBarIcon: () => <TempTabButton />
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/create-vc")
          }
        }}
      />
      {/* <Tabs.Screen
        name="custom"
        options={{
          title: 'Custom',
          tabBarLabel: 'Custom',
          tabBarButton: TempTabButton
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          }
        }}
      /> */}
    </Tabs>
  );
}
