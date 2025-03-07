import { View } from 'react-native';

import Header from './Header';
import Seperator from './Seperator';
import TitleCard from './TitleCard';

export default function HabitsContainer({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex flex-col gap-6 px-8 pt-20">
      <Header />
      <Seperator />
      <View className="flex-col gap-6">
        <TitleCard title="your habits" subtitle="track" variant="lg" />
        <View className="flex-col gap-2">{children}</View>
      </View>
    </View>
  );
}
