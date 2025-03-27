import { router, useFocusEffect } from "expo-router";
import { useState } from "react";
import { Text, SafeAreaView } from "react-native";

export default function MyScreen() {
  //useFocusEffect 화면이 포커스 됐을대 작업을 넣어 줄 수 있음

  useFocusEffect(() => {
    router.replace("/auth");
  });

  return (
    <SafeAreaView>
      <Text>내정보 스크린</Text>
    </SafeAreaView>
  );
}
