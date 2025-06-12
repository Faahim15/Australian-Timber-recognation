import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  LoginTitle,
  SkipButton,
} from "../../components/authentication/CustomSignNdLogIn";
import CutomButton from "../../components/CutomButton";
import SignUpText from "../../components/authentication/SignUpText";
import ContinueWdGogleBtn from "../../components/authentication/ContinueWdGogleBtn";
import CheckBox from "../../components/authentication/CheckBox";
import EmailInput from "../../components/authentication/EmailInput";
import PasswordInput from "../../components/authentication/PasswordInput";
import { useNavigation } from "@react-navigation/native";
export default function LogInScreen() {
  const navigation = useNavigation();
  const logInHandler = () => {
    navigation.navigate("MainTabs");
  };

  function skipButtonHanlder() {
    navigation.navigate("CreateAccountScreen");
  }
  function signUpHandler() {
    navigation.navigate("SignUp");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]" edges={["top", "bottom"]}>
        <View className="flex-1 ">
          <SkipButton onPress={skipButtonHanlder} />
          <LoginTitle
            title={"Log in now"}
            subtitle={"Please sign in to continue our app"}
          />
          <EmailInput />
          <PasswordInput />
          <CheckBox />
          <CutomButton title="Log In" onPress={logInHandler} />
          <SignUpText
            onPress={signUpHandler}
            text={"Don't have an account?"}
            buttonText={"Sign up"}
          />

          <ContinueWdGogleBtn />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
