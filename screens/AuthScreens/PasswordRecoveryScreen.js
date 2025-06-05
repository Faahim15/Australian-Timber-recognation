import { View, Text } from "react-native";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../../components/authentication/EmailInput";
import CutomButton from "../../components/CutomButton";
export default function PasswordRecoveryScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <LoginTitle
          title="Forgot password"
          subtitle="Enter your email account to reset your passwrod"
        />
        <EmailInput />
        <CutomButton title="Reset Password" marginTop={40} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
