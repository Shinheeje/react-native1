import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useState } from "react";
import { Text, SafeAreaView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="버튼" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
