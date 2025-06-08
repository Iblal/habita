import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({size, focused }) => (
            <FontAwesome
              name="home"
              size={size}
              color={focused ? '#FF5C00' : '#838383'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          title: 'Progress',
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="pulse"
              size={size}
              color={focused ? '#FF5C00' : '#838383'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <FontAwesome
              name="cog"
              size={size}
              color={focused ? '#FF5C00' : '#838383'}
            />
          ),
        }}
      />
    </Tabs>
  );
}