import Ionicons from '@expo/vector-icons/Ionicons';
import CompletedHabits from 'components/CompletedHabits';
import HabitCard from 'components/HabitCard';
import HabitProvider, { useHabit } from 'components/HabitContext';
import HabitsContainer from 'components/HabitsContainer';
import Header from 'components/Header';
import NewHabitModal from 'components/NewHabitModal';
import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableHighlight, View } from 'react-native';
import './global.css';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <HabitProvider>
      <SafeAreaView className="flex-1 bg-gray-100">
        {isModalVisible && <NewHabitModal visible={isModalVisible} onClose={toggleModal} />}
        <View className="flex-1">
          <Header>
            <TouchableHighlight
              className="size-14 items-center justify-center rounded-full border"
              onPress={toggleModal}>
              <Ionicons name="add-outline" size={24} />
            </TouchableHighlight>
          </Header>
          <ScrollView className="flex-1">
            <HabitsContainer />
            <CompletedHabits />
          </ScrollView>
        </View>
      </SafeAreaView>
    </HabitProvider>
  );
}
