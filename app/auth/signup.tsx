import CustomButton from "@/components/CustomButton";
import FixedBottomCTA from "@/components/FixedBtottomCTA";
import InputField from "@/components/InputField";
import { colors } from "@/constants";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FormProvider, useForm } from "react-hook-form";
type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignupScreen() {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <InputField label="이메일" placeholder="이메일을 입력해주세요." />
        <InputField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={() => {}} />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
