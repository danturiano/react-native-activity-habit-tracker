import { View } from 'react-native';

import UserProfile from './UserProfile';

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <View className="mb-6 flex-row items-center justify-between px-8 pt-6">
      <UserProfile />
      {children}
    </View>
  );
}
