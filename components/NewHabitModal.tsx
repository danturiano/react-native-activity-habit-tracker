import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useHabit } from './HabitContext';

type AddModalProps = {
  visible: boolean;
  onClose: () => void;
};

const initialHabitForm = {
  title: '',
  duration: '',
  is_done: false,
  times_per_day: '',
  times_completed: '1',
};

export default function NewHabitModal({ visible = false, onClose }: AddModalProps) {
  const [form, setForm] = useState(initialHabitForm);
  const { handleAddHabit } = useHabit();

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View className="absolute inset-0 justify-between bg-[#DDEDEC] px-8 pb-16 pt-20">
        <View className="fixed flex-row items-center justify-between">
          <TouchableHighlight
            className="size-14 items-center justify-center rounded-full border"
            onPress={onClose}>
            <Ionicons name="arrow-back-outline" size={24} />
          </TouchableHighlight>
          <Text className="text-start text-4xl">add new habit</Text>
        </View>
        <View className="items-center gap-1">
          <View className="flex-row items-center gap-4">
            <Text className="text-2xl">new habit:</Text>
            <TextInput
              value={form.title}
              onChangeText={(text) => handleChange('title', text)}
              placeholder="Drink water"
              className="w-40 text-2xl"
            />
          </View>
          <View className="flex-row items-center gap-4">
            <Text className="text-2xl">duration:</Text>
            <TextInput
              value={form.duration}
              onChangeText={(text) => handleChange('duration', text)}
              placeholder="15 minutes"
              className="w-40 text-2xl"
            />
          </View>
          <View className="flex-row items-center gap-4">
            <Text className="text-2xl">repetition:</Text>
            <TextInput
              value={form.times_per_day}
              onChangeText={(text) => handleChange('times_per_day', text)}
              placeholder="2 times"
              className="w-40 text-2xl"
            />
          </View>
        </View>
        <TouchableHighlight
          disabled={form.title === ''}
          className="h-14 w-full items-center justify-center rounded-2xl border"
          onPress={() => {
            handleAddHabit(form);
          }}>
          <View className="flex-row items-center gap-2">
            <Text className="text-2xl">add habit</Text>
            <Ionicons name="add-outline" size={24} />
          </View>
        </TouchableHighlight>
      </View>
    </Modal>
  );
}
