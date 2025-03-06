import { View } from 'react-native';

import AddButton from './AddButton';
import UserProfile from './UserProfile';

export default function Header() {
  return (
    <View className="flex-row items-center justify-between">
      <UserProfile />
      <AddButton />
    </View>
  );
}
