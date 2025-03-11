import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.text}>텍스트</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>텍스트</Text>
          <Text style={styles.text}>텍스트</Text>
          <Text style={styles.text}>텍스트</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "yellow",
    color: "red",
  },
  container2: {
    backgroundColor: "blue",
    color: "blue",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
  input: {
    fontSize: 30,
  },
});
