import Ionicons from '@expo/vector-icons/Ionicons';
import CompletedHabits from 'components/CompletedHabits';
import HabitCard, { Habit } from 'components/HabitCard';
import HabitsContainer from 'components/HabitsContainer';
import Header from 'components/Header';
import NewHabitModal from 'components/NewHabitModal';
import { habitsData } from 'data/sample-data';
import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableHighlight, View } from 'react-native';
import './global.css';

export default function App() {
  const [habits, setHabits] = useState<Habit[]>(habitsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleAddHabit = (newHabit: Habit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  const handleRemoveHabit = (title: string) => {
    setHabits((habits) => {
      return habits.filter((habit) => habit.title !== title);
    });
  };

  const handleUpdateHabit = (title: string) => {
    setHabits((habits) =>
      habits.map((habit) => (habit.title === title ? { ...habit, is_done: true } : habit))
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {isModalVisible && (
        <NewHabitModal
          visible={isModalVisible}
          onClose={toggleModal}
          handleAddHabit={handleAddHabit}
        />
      )}
      <View className="flex-1">
        <Header>
          <TouchableHighlight
            className="size-14 items-center justify-center rounded-full border"
            onPress={toggleModal}>
            <Ionicons name="add-outline" size={24} />
          </TouchableHighlight>
        </Header>
        <ScrollView className="flex-1">
          <HabitsContainer habits={habits}>
            <View className="flex-col gap-2">
              {habits
                .filter((habit) => !habit.is_done)
                .map((habit, index) => (
                  <HabitCard
                    habit={habit}
                    key={index}
                    handleRemoveHabit={handleRemoveHabit}
                    handleUpdateHabit={handleUpdateHabit}
                  />
                ))}
            </View>
          </HabitsContainer>
          <CompletedHabits habits={habits} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
