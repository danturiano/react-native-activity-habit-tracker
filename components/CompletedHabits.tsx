import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

import CompletedCard from './CompletedCard';
import { Habit } from './HabitCard';
import TitleCard from './TitleCard';

type CompletedHabitsProps = {
  habits: Habit[];
};

export default function CompletedHabits({ habits }: CompletedHabitsProps) {
  return (
    <View className="mt-6 min-h-full flex-col gap-6 rounded-3xl bg-white p-8">
      <View className="flex-row items-center justify-between">
        <TitleCard title="completed" subtitle="habits" variant="md" />
        <View className="size-14 items-center justify-center rounded-full border">
          <Ionicons name="arrow-up-outline" size={24} className="rotate-[40deg]" />
        </View>
      </View>
      <View className="flex-col gap-2">
        {habits
          .filter((habit) => habit.is_done)
          .map((habit, index) => (
            <CompletedCard habit={habit} key={index} />
          ))}
      </View>
    </View>
  );
}
