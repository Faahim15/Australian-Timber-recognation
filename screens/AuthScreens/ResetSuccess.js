import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/authentication/BackButton";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
import { LoginTitle } from "../../components/authentication/CustomSignNdLogIn";
export default function ResetSuccess() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFDFA" }}>
        <BackButton />
        <View style={styles.centerContainer}>
          <LottieView
            source={require("../../assets/animations/success.json")}
            autoPlay
            loop={false}
            style={styles.checkMark}
          />
        </View>
        <LoginTitle
          title="Successful"
          subtitle="Congratulations! Your password has been changed. Click continue to login"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    marginTop: verticalScale(91),
    marginHorizontal: scale(138),
  },
  checkMark: {
    width: scale(98),
    height: verticalScale(98),
  },
});
