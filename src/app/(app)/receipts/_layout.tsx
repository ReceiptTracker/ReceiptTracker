import { Stack } from "expo-router";

export default function ReceiptsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "My Receipts"
      }} />
      <Stack.Screen name="[id]" options={{
        title: "Receipt Details"
      }} />
    </Stack>
  )
}