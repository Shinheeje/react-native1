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
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      ></TextInput>
      <Button title="버튼이름" onPress={() => console.log("버튼이름")}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    color: "red",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
  input: {
    fontSize: 30,
  },
});
