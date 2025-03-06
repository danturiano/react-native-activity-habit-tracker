import { Text, View } from 'react-native';

type Habit = {
  title: string;
  duration: number | undefined;
  is_done: boolean;
  times_per_day?: number | undefined;
  times_completed?: number;
};

type HabitCardProps = {
  habit: Habit;
};

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <View className="w-full rounded-md">
      <Text>{habit.title}</Text>
    </View>
  );
}
