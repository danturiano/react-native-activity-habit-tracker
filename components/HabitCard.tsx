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
    <View className="w-full rounded-lg bg-[#DDEDEC] p-6">
      <Text className="text-4xl">{habit.title}</Text>
      {habit.duration && <Text className="text-right text-2xl">{habit.duration} min</Text>}
      {habit.times_per_day && (
        <Text className="text-right text-2xl">
          {habit.times_completed + '/' + habit.times_per_day} Completed
        </Text>
      )}
    </View>
  );
}
