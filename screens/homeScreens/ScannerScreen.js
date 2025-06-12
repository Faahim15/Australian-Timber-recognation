import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomTitle from "../../components/CustomTitle";
import LottieView from "lottie-react-native";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
export default function ScannerScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <CustomTitle
          marginTop={130}
          title="Welcome to TimberLens"
          subtitle="Scan Your Timber to Discover Its Identity.Find out the species, strength, color, and origin in seconds."
        />

        <LottieView
          source={require("../../assets/animations/arrowAnimation.json")}
          autoPlay
          loop
          style={styles.arrow}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  arrow: {
    width: scale(92),
    height: verticalScale(92),
    marginHorizontal: scale(146),
    marginTop: verticalScale(120),
  },
});
