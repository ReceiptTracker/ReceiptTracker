import { StyleSheet, Text, View } from "react-native";

export default function ReceiptsScreen() {
  return <View style={styles.container}>
    <Text>Display a list of receipts</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});