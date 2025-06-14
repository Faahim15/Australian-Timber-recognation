import { View, Text } from "react-native";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../../components/authentication/EmailInput";
import CutomButton from "../../components/CutomButton";
import BackButton from "../../components/authentication/BackButton";
import { useNavigation } from "@react-navigation/native";
import { primaryButtonPreset } from "../../components/constants/PrimaryButtonPreset";
export default function PasswordRecoveryScreen() {
  const navigation = useNavigation();
  function resetPasswordHandler() {
    navigation.navigate("OtpVerificationScreen");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <BackButton />
        <LoginTitle
          title="Forgot password"
          subtitle="Enter your email account to reset your password"
          marginTop={36}
        />
        <EmailInput />
        <CutomButton
          onPress={resetPasswordHandler}
          title="Reset Password"
          {...primaryButtonPreset}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
