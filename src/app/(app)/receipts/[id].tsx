import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SingleReceiptScreen() {
  const { id } = useLocalSearchParams<{ id: string}>();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Receipt No. ${id}`}} />
      <Text>Display a single receipt</Text>
      <Text>ID: #{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});