import AppContainer from 'components/AppContainer';
import HabitCard, { Habit } from 'components/HabitCard';
import Header from 'components/Header';
import Seperator from 'components/Seperator';
import TitleCard from 'components/TitleCard';
import { habitsData } from 'data/sample-data';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import './global.css';

export default function App() {
  const [habits, setHabits] = useState(habitsData);

  return (
    <ScrollView className="mx-8 my-20">
      <AppContainer>
        <Header />
        <Seperator />
        <View className="flex-col gap-6">
          <TitleCard title="your habits" subtitle="track" variant="lg" />
          <View className="flex-col gap-2">
            {habits.map((habit, index) => (
              <HabitCard habit={habit} key={index} />
            ))}
          </View>
        </View>
      </AppContainer>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
