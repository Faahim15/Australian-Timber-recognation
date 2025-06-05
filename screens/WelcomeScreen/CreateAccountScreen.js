import { View, Text, Image } from "react-native";
import CustomTitle from "../../components/CustomTitle";
import CutomButton from "../../components/CutomButton";
import DotIndicator from "../../components/DotIndicator";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  function createAccountHandler() {
    navigation.navigate("LogIn");
  }
  return (
    <View className="bg-[#FAFDFA] flex-col justify-between items-center gap-y-5">
      <CustomTitle
        title="Know Your Wood & Tree Profile"
        subtitle="Learn about timber species, their source trees, suitable uses all in one place."
      />
      <Image
        className="w-[276.88px] h-[278px] mt-[52px] mx-[49.06px]"
        source={require("../../assets/images/account.png")}
      />
      <CutomButton title="Create Account" onPress={createAccountHandler} />
      <DotIndicator activeIndex={2} />
    </View>
  );
}
