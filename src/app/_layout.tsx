import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{
          title: "Home Page"
        }} />
        <Stack.Screen name="(app)" options={{
          headerShown: false
        }} />
      </Stack>
    </>
  )
}
