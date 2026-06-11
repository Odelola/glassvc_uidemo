import { HomeTabIcon, HomeTabIconActive, PlusIcon, ProfileTabIcon, ProfileTabIconActive, ReceiptTabIcon, ReceiptTabIconActive } from '@/assets/icons';
import { TabBarMaskedBackground } from '@/components';
import { AppBox } from '@/shared';
import { useRouter, Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TABBAR_HEIGHT = 60;
export const CREATEVCICON_DIMESIONS = -1 * TABBAR_HEIGHT * .75;

export default function TabLayout() {
  const router = useRouter();


  function CreateVCButton() {

    return (
      <AppBox className='bg-brand size-16 justify-center items-center rounded-lg -rotate-45'
        style={{
          position: 'absolute',
          top: CREATEVCICON_DIMESIONS,
          right: 0,

        }}
      >
        <PlusIcon style={{ transform: [{ rotate: '45deg' }], }} />
      </AppBox>
    )
  }
  const insets = useSafeAreaInsets();

  return (

    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 0,
          height: TABBAR_HEIGHT + insets.bottom,
        },
        tabBarIconStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerShown: false,
        tabBarLabelVisibilityMode: 'unlabeled',
        tabBarBackground: () => <TabBarMaskedBackground />,
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
          tabBarIcon: () => <CreateVCButton />
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/create-vc")
          }
        }}
      />
    </Tabs>
  );
}
