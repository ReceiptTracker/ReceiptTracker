import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ReceiptsScreen() {
  return (
    <View style={styles.container}>
      <Text>Display a list of receipts</Text>
      <Link href={{
        pathname: "/receipts/[id]",
        params: { id: 1234 }
      }}>
        Go to Receipt #1234
      </Link>
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