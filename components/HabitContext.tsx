import { habitsData } from 'data/sample-data';
import { createContext, useContext, useState } from 'react';

import { Habit } from './HabitCard';

type HabitContextType = {
  habits: Habit[];
  handleAddHabit: (newHabit: Habit) => void;
  handleRemoveHabit: (title: string) => void;
  handleUpdateHabit: (title: string) => void;
};

export const HabitContext = createContext<HabitContextType | undefined>(undefined);

export default function HabitProvider({ children }: { children: React.ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>(habitsData);

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
    <HabitContext.Provider value={{ habits, handleAddHabit, handleRemoveHabit, handleUpdateHabit }}>
      {children}
    </HabitContext.Provider>
  );
}

export const useHabit = () => {
  const context = useContext(HabitContext);
  if (context === undefined) {
    throw new Error('useHabit must be used within a HabitProvider');
  }
  return context;
};
