import { View } from 'react-native';

import HabitCard, { Habit } from './HabitCard';
import Seperator from './Seperator';
import TitleCard from './TitleCard';

type HabitsContainerProps = {
  habits: Habit[];
  children: React.ReactNode;
};

export default function HabitsContainer({ habits, children }: HabitsContainerProps) {
  return (
    <View className="flex flex-col gap-6 px-8">
      <Seperator />
      <View className="flex-col gap-6">
        <TitleCard title="your habits" subtitle="track" variant="lg" />
        {children}
      </View>
    </View>
  );
}
