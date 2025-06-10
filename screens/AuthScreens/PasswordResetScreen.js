import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/authentication/BackButton";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import CutomButton from "../../components/CutomButton";
import { useNavigation } from "@react-navigation/native";
import { primaryButtonPreset } from "../../components/constants/PrimaryButtonPreset";
export default function PasswordResetScreen() {
  const navigation = useNavigation();

  function confirmButtonHanlder() {
    navigation.navigate("ResetSuccess");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <BackButton marginTop={28} />
        <LoginTitle
          title="Password reset"
          subtitle="Your password has been successfully reset. Click confirm to set a new password"
        />
        <CutomButton
          title="Confirm"
          onPress={confirmButtonHanlder}
          {...primaryButtonPreset}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
