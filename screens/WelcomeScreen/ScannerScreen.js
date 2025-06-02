import { View, Text, Image } from "react-native";
import CustomTitle from "../../components/CustomTitle";
import CutomButton from "../../components/CutomButton";
import { useNavigation } from "@react-navigation/native";

export default function ScannerScreen() {
  const navigation = useNavigation();
  function continueButtonHandler() {
    navigation.navigate("CreateAccountScreen");
  }
  return (
    <View className="flex-col justify-between items-center gap-y-5">
      <CustomTitle
        title="Scan. Timber. Get Insights"
        subtitle="Just take a photo and get instant details about wood type, origin, and properties."
        description="Trusted By 16546+ Users"
      />
      <Image
        className="w-[258px] h-[326px] mt-[47px] mx-[37px] "
        source={require("../../assets/images/QR-code.png")}
      />
      <CutomButton onPress={continueButtonHandler} title="Continue" />
    </View>
  );
}
