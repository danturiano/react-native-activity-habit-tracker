import Ionicons from '@expo/vector-icons/Ionicons';
import AddModal from 'components/AddModal';
import CompletedHabits from 'components/CompletedHabits';
import HabitsContainer from 'components/HabitsContainer';
import Header from 'components/Header';
import { habitsData } from 'data/sample-data';
import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableHighlight, View } from 'react-native';
import './global.css';

export default function App() {
  const [habits, setHabits] = useState(habitsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {isModalVisible && <AddModal visible={isModalVisible} onClose={toggleModal} />}
      <View className="flex-1">
        <Header>
          <TouchableHighlight
            className="size-14 items-center justify-center rounded-full border"
            onPress={toggleModal}>
            <Ionicons name="add-outline" size={24} />
          </TouchableHighlight>
        </Header>
        <ScrollView className="flex-1">
          <HabitsContainer habits={habits} />
          <CompletedHabits habits={habits} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
