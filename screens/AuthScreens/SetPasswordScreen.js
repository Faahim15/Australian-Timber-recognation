import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/authentication/BackButton";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import PasswordInput from "../../components/authentication/PasswordInput";
import CutomButton from "../../components/CutomButton";
import { primaryButtonPreset } from "../../components/constants/PrimaryButtonPreset";
export default function SetPasswordScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <BackButton />
        <LoginTitle
          title="Set a new password"
          subtitle="Create a new password. Ensure it differs from previous ones for security"
        />
        <PasswordInput />
        <PasswordInput placeholder="Re-enter password" />
        <CutomButton title="Update password" {...primaryButtonPreset} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
