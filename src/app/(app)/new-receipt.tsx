import { StyleSheet, Text, View } from "react-native";

export default function NewReceiptScreen() {
  return (
    <View style={styles.container}>
      <Text>Create or upload a new receipt</Text>
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