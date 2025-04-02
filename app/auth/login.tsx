import CustomButton from "@/components/CustomButton";
import FixedBottomCTA from "@/components/FixedBtottomCTA";
import InputField from "@/components/InputField";
import { colors } from "@/constants";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FormProvider, useForm } from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
type FormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (formValues: FormValues) => {
    console.log("onSubmit", formValues);
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottomCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onSubmit)}
      />
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
