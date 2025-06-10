import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
import EmailInput from "../../components/authentication/EmailInput";
import PasswordInput from "../../components/authentication/PasswordInput";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
import CutomButton from "../../components/CutomButton";
import SignUpText from "../../components/authentication/SignUpText";
import ContinueWdGogleBtn from "../../components/authentication/ContinueWdGogleBtn";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/authentication/BackButton";
import { primaryButtonPreset } from "../../components/constants/PrimaryButtonPreset";
export default function SignUpScreen() {
  const navigation = useNavigation();
  function signInHandler() {
    navigation.navigate("LogIn");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-[#FAFDFA] flex-1">
        <BackButton />
        <LoginTitle
          title={"Sign up now"}
          subtitle={"Please fill the details and create account"}
        />
        <EmailInput
          placeholder={"Enter your name.."}
          keyboardType="default"
          autoCapitalize="words"
        />
        <EmailInput marginTop={24} />
        <PasswordInput />
        <Text style={styles.text}>Password must be 8 character</Text>
        <CutomButton {...primaryButtonPreset} title="Sign Up" />
        <SignUpText
          marginTop={32}
          text={"Already have an account?"}
          buttonText={"Sign in"}
          onPress={signInHandler}
        />
        <ContinueWdGogleBtn marginTop={33} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontfamily: "poppins-400regular",
    fontSize: scale(14),
    lineHeight: verticalScale(24),
    letterSpacing: scale(0),
    color: "#535353",
    marginHorizontal: scale(20),
    marginTop: verticalScale(16),
  },
});
