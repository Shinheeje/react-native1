import CustomButton from "@/components/CustomButton";
import FeedItem from "@/components/FeedItem";
import { router } from "expo-router";
import { useState } from "react";
import { Text, SafeAreaView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FeedItem />
    </SafeAreaView>
  );
}
