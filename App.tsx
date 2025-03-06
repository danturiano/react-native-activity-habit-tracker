import AppContainer from 'components/AppContainer';
import HabitCard from 'components/HabitCard';
import Header from 'components/Header';
import Seperator from 'components/Seperator';
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
        <View className="flex-col gap-1">
          {habits.map((habit) => (
            <HabitCard habit={habit} />
          ))}
        </View>
      </AppContainer>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
