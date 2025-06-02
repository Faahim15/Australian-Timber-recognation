import { View, Text, Pressable } from "react-native";

export default function CutomButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mx-[60px] w-[254px] mt-[74px] h-[60px] bg-[#2E7D32] rounded-[14px] px-[64px] py-[18px] justify-center items-center"
    >
      <Text className="text-white text-base font-poppins-semiBold">
        {title}
      </Text>
    </Pressable>
  );
}
