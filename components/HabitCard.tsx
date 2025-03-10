import { useState } from 'react';
import { Button, Modal, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { useHabit } from './HabitContext';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { handleUpdateHabit, handleRemoveHabit } = useHabit();

  const toggleModal = () => setIsModalVisible((prev) => !prev);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View className="w-full rounded-2xl bg-[#DDEDEC] p-6">
      <Pressable onPress={toggleModal}>
        <Text className="text-4xl">{habit.title}</Text>
        <View className="flex-row items-center justify-end gap-2">
          {habit.duration && <Text className="text-right text-xl">{habit.duration} min</Text>}
          {habit.duration && habit.times_per_day && <Text className="text-xl">&</Text>}
          {!!habit.times_per_day && (
            <Text className="text-right text-xl">
              {habit.times_completed + '/' + habit.times_per_day} Completed˝
            </Text>
          )}
        </View>
      </Pressable>
      <Modal transparent visible={isModalVisible} animationType="fade">
        <Pressable className="flex-1 bg-black/30" onPress={closeModal} />
        <View className="absolute bottom-10 left-5 right-5 flex-col gap-4 rounded-2xl bg-white p-6">
          <TouchableHighlight
            className="rounded-lg border p-4"
            onPress={() => handleUpdateHabit(habit.title)}>
            <Text className="text-center text-lg">complete habit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => handleRemoveHabit(habit.title)}
            className="rounded-lg bg-red-400 p-4">
            <Text className="text-center text-lg text-white">remove habit</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
}
