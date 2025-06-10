import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/authentication/BackButton";
import OtpVerificationInput from "../../components/authentication/OtpVerificationInput";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import CutomButton from "../../components/CutomButton";
import { primaryButtonPreset } from "../../components/constants/PrimaryButtonPreset";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
import { useNavigation } from "@react-navigation/native";
export default function OtpVerificationScreen() {
  const navigation = useNavigation();
  function verifyCodeHandler() {
    navigation.navigate("PasswordResetScreen");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <BackButton />
        <LoginTitle
          title="OTP verificaton"
          subtitle="Please check your email"
          marginTop={38}
        />
        <OtpVerificationInput />
        <CutomButton
          title="Verify code"
          onPress={verifyCodeHandler}
          {...primaryButtonPreset}
        />
        <View
          style={styles.resendText}
          className="  flex-row font-poppins-400regular justify-between"
        >
          <Text className="text-[#535353]">Resend code to</Text>
          <Text className="text-[#535353]">01:26</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  resendText: {
    fontSize: scale(14),
    lineHeight: verticalScale(16),
    letterSpacing: scale(0),
    marginTop: verticalScale(32),
    marginHorizontal: scale(20),
  },
});
