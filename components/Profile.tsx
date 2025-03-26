import { colors } from "@/constants";
import React, { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ProfileProps {
  onPress: () => void;
  nickname: string;
  imageUrl: string;
  createdAt: string;
  option?: ReactNode;
}

function Profile({ onPress, imageUrl, nickname, createdAt }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileContainer} onPress={onPress}>
        <Image
          source={
            imageUrl
              ? { uri: imageUrl }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
      </Pressable>
      <View style={{ gap: 4 }}>
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300,
  },
  nickname: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.BLACK,
  },
  createdAt: {
    fontSize: 14,
    color: colors.GRAY_500,
  },
});

export default Profile;
