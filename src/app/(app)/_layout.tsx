import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen name="dashboard" options={{
        tabBarIcon: () => <MaterialIcons size={28} name="dashboard" />,
        title: "Dashboard",
      }} />
      <Tabs.Screen name="new-receipt" options={{
        tabBarIcon: () => <FontAwesome size={28} name="camera" />,
        title: "Create New",
      }} />
      <Tabs.Screen name="receipts" options={{
        headerShown: false,
        tabBarIcon: () => <Ionicons size={28} name="receipt" />,
        title: "My Receipts"
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarIcon: () => <FontAwesome size={28} name="user-circle-o" />,
        title: "Account"
      }} />
    </Tabs>
  )
}