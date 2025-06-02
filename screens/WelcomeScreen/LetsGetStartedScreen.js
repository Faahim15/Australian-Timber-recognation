import { Pressable, View, Text, Image, StyleSheet, Button } from "react-native";
import clsx from "clsx";
import CustomTitle from "../../components/CustomTitle";
import CutomButton from "../../components/CutomButton";
import { useNavigation } from "@react-navigation/native";

export default function LetsGetStartedScreen() {
  const navigation = useNavigation();
  function startScreenHandler() {
    navigation.navigate("continue");
  }

  return (
    <View className="flex-col justify-between items-center gap-y-5">
      <CustomTitle
        title="Welcome to TimberLens"
        subtitle=" Easily identify timber species using your phone"
        description="Trusted By 16546+ Users"
      />
      <Image
        className="w-[283px] h-[283px] mt-[86px] mx-[46px]"
        source={require("../../assets/images/getStartedImg.png")}
      />
      <CutomButton onPress={startScreenHandler} title="Let's get started" />
    </View>
  );
}
