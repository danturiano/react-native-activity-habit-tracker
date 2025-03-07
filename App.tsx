import CompletedCard from 'components/CompletedCard';
import CompletedHabits from 'components/CompletedHabits';
import HabitCard from 'components/HabitCard';
import HabitsContainer from 'components/HabitsContainer';
import { habitsData } from 'data/sample-data';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import './global.css';

export default function App() {
  const [habits, setHabits] = useState(habitsData);

  return (
    <ScrollView className="bg-gray-100">
      <HabitsContainer>
        {habits
          .filter((habit) => !habit.is_done)
          .map((habit, index) => (
            <HabitCard habit={habit} key={index} />
          ))}
      </HabitsContainer>
      <CompletedHabits>
        {habits
          .filter((habit) => habit.is_done)
          .map((habit, index) => (
            <CompletedCard habit={habit} key={index} />
          ))}
      </CompletedHabits>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
