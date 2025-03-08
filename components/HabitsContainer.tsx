import { View } from 'react-native';

import HabitCard, { Habit } from './HabitCard';
import Seperator from './Seperator';
import TitleCard from './TitleCard';

type HabitsContainerProps = {
  habits: Habit[];
};

export default function HabitsContainer({ habits }: HabitsContainerProps) {
  return (
    <View className="flex flex-col gap-6 px-8">
      <Seperator />
      <View className="flex-col gap-6">
        <TitleCard title="your habits" subtitle="track" variant="lg" />
        <View className="flex-col gap-2">
          {habits
            .filter((habit) => !habit.is_done)
            .map((habit, index) => (
              <HabitCard habit={habit} key={index} />
            ))}
        </View>
      </View>
    </View>
  );
}
