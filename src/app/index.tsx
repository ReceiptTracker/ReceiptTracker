import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>If user is not logged in, show auth buttons.</Text>
      <Text>If logged in, redirect to Dashboard area.</Text>

      <View style={{ marginVertical: 20 }}>
      <Link href="/(app)/dashboard">Go to Dashboard</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
