import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{
        title: "Dashboard"
      }} />
      <Tabs.Screen name="new-receipt" options={{
        title: "Create New"
      }} />
      <Tabs.Screen name="receipts" options={{
        headerShown: false,
        title: "My Receipts"
      }} />
    </Tabs>
  )
}