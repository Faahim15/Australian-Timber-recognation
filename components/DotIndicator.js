import React from "react";
import { View } from "react-native";

export default function DotIndicator({ activeIndex = 0 }) {
  return (
    <View className="bg-[#fff] flex-row justify-center gap-[10px] items-center  mt-[65px] mb-[19px]">
      {[0, 1, 2].map((index) => (
        <View
          style={{
            shadowColor: "#ffffff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25, // #00000040 = 25% opacity
            shadowRadius: 2,
            elevation: 4, // For Android
          }}
          key={index}
          className={
            index === activeIndex
              ? " w-[60px] h-[12px]  rounded-[20px] bg-[#2E7D32]"
              : " w-[35px] h-[12px]  rounded-[20px] bg-[#FFFFFF] border border-gray-300"
          }
        />
      ))}
    </View>
  );
}
