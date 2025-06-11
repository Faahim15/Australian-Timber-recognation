import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";
import Subscription from "../../components/home/Subscription";
import CutomButtom from "../../components/CutomButton";
export default function SubscriptionPage() {
  const freeSubscriptionInfo = {
    title: "Free Trial",
    duration: "🎁 3-Day",
    description1: "Identify timber species",
    description2: "Access to 10 searches",
    description3: "Basic info only",
    containerBg: "#CFEDD1",
    borderColor: "#fff",
    circleColor: "#2E7D32",
  };
  const premiumSubscriptionInfo = {
    title: "Premium monthly",
    duration: "$5 / month",
    description1: "Unlimited timber identification",
    description2: "Full timber profiles",
    description3: "Location-based search",
    // borderColor: "#2E7D32",
  };

  const yearlySubscriptionPlanInfo = {
    title: "Yearly Plan",
    duration: "$49 / year",
    description1: "Same as montly plan",
    description2: "Full timber profiles",
    description3: "Location-based search",
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#FAFDFA]">
        <ScrollView>
          <Text style={styles.text} className="font-poppins-semiBold">
            TimberLens Premium
          </Text>
          <Image
            style={styles.image}
            source={require("../../assets/images/Simplification.png")}
          />
          <Text style={styles.heading} className="font-poppins-500medium">
            Start Using TimberLens with Premium Benefits
          </Text>
          <Subscription {...freeSubscriptionInfo} />
          <Subscription {...premiumSubscriptionInfo} />
          <Subscription {...yearlySubscriptionPlanInfo} />
          <CutomButtom
            title="Start Free Trial"
            height={40}
            width={335}
            marginTop={17.8}
            marginHorizontal={20}
            borderRadius={6}
            lineHeight={20}
            paddingVertical={10}
          />
          <View className="flex-row gap-2 justify-center items-center">
            <Text style={styles.terms}>Restore</Text>
            <Text style={styles.terms}>Terms</Text>
            <Text style={styles.terms}>Privacy Policy</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    letterSpacing: scale(0),
    marginHorizontal: scale(101),
    marginTop: verticalScale(13),
  },
  image: {
    width: scale(199.8),
    height: verticalScale(148),
    marginHorizontal: scale(67.6),
    marginTop: verticalScale(13),
  },
  heading: {
    marginTop: verticalScale(15),
    fontSize: scale(16),
    lineHeight: verticalScale(22),
    letterSpacing: 0,
    textAlign: "center",
    paddingHorizontal: scale(20.6),
    color: "#3E2723",
  },
  terms: {
    fontFamily: "poppins-400regular",
    fontSize: scale(12),
    lineHeight: verticalScale(12),
    letterSpacing: scale(0),
    textDecorationLine: "underline",
    marginTop: verticalScale(9),
    color: "#3E2723",
  },
});
