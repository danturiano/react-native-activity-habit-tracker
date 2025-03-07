import React from 'react';
import { Text, View } from 'react-native';

type TitleCardProps = {
  title: string;
  subtitle: string;
  variant?: 'sm' | 'md' | 'lg';
};

const variantStyles = {
  sm: { subtitle: 'text-sm', title: 'text-xl' },
  md: { subtitle: 'text-lg', title: 'text-2xl' },
  lg: { subtitle: 'text-3xl', title: 'text-[74px] leading-none' },
};

export default function TitleCard({ title, subtitle, variant = 'sm' }: TitleCardProps) {
  return (
    <View className="flex-col">
      <Text className={`${variantStyles[variant].subtitle} text-gray-500`}>{subtitle}</Text>
      <Text className={`${variantStyles[variant].title}`}>{title}</Text>
    </View>
  );
}
