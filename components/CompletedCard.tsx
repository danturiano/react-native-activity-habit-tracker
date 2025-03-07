import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

import { Habit } from './HabitCard';

type CompletedCardProps = {
  habit: Habit;
};

export default function CompletedCard({ habit }: CompletedCardProps) {
  return (
    <View className="w-full flex-row items-center justify-between rounded-3xl border p-6">
      <View className="flex-row items-center gap-4">
        <View className="size-12 items-center justify-center rounded-2xl border bg-[#010101]">
          <Ionicons name="checkmark-sharp" size={20} color="#ffffff" />
        </View>
        <Text className="text-xl">{habit.title}</Text>
      </View>
      {habit.duration ? <Text>{habit.duration} min</Text> : <Text>Done!</Text>}
    </View>
  );
}
