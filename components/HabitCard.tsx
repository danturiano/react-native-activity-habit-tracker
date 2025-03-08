import { Text, View } from 'react-native';

export type Habit = {
  title: string;
  duration: string | undefined;
  is_done: boolean;
  times_per_day?: string | undefined;
  times_completed?: string | undefined;
};

type HabitCardProps = {
  habit: Habit;
};

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <View className="w-full rounded-2xl bg-[#DDEDEC] p-6">
      <Text className="text-4xl">{habit.title}</Text>
      <View className="flex-row items-center justify-end gap-2">
        {habit.duration && <Text className="text-right text-xl">{habit.duration} min</Text>}
        {habit.duration && habit.times_per_day && <Text className="text-xl">&</Text>}
        {habit.times_per_day && (
          <Text className="text-right text-xl">
            {habit.times_completed + '/' + habit.times_per_day} Completed
          </Text>
        )}
      </View>
    </View>
  );
}
