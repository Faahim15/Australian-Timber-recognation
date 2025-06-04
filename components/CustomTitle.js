import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CustomTitle({ title, subtitle, description }) {
  return (
    <View className="mt-[71px] ml-[20px] mr-[23px]">
      <Text className="text-2xl-custom text-center font-poppins-semiBold">
        {title}
      </Text>
      <Text className="text-center font-poppins text-[16px] ">{subtitle}</Text>
      {description ? (
        <Text className="text-center font-poppins text-xs">{description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});
