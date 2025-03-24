import CustomButton from "@/components/CustomButton";
import FeedItem from "@/components/FeedItem";
import FeedList from "@/components/FeedList";
import { colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { Text, SafeAreaView, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
