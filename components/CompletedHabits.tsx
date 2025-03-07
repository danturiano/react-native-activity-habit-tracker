import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

import TitleCard from './TitleCard';

export default function CompletedHabits({ children }: { children: React.ReactNode }) {
  return (
    <View className="mt-6 min-h-full flex-col gap-6 rounded-3xl bg-white p-8">
      <View className="flex-row items-center justify-between">
        <TitleCard title="completed" subtitle="habits" variant="md" />
        <View className="size-14 items-center justify-center rounded-full border">
          <Ionicons name="arrow-up-outline" size={24} className="rotate-[40deg]" />
        </View>
      </View>
      <View className="flex-col gap-2">{children}</View>
    </View>
  );
}
