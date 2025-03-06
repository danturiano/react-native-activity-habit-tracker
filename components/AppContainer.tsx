import React from 'react';
import { View } from 'react-native';

export default function AppContainer({ children }: { children: React.ReactNode }) {
  return <View className="flex flex-col gap-6">{children}</View>;
}
