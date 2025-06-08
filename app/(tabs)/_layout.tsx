import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesome name="home" size={size} color="#FF5C00" />
          ),
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          title: 'Progress',
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesome name="line-chart" size={size} color="#838383" />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <FontAwesome name="cog" size={size} color="#838383" />
          ),
        }}
      />
    </Tabs>
  );
}