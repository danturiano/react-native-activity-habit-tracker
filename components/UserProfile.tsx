import { Image, View } from 'react-native';

import TitleCard from './TitleCard';

export default function UserProfile() {
  return (
    <View className="flex-row items-center gap-4">
      <Image
        source={require('../assets/uifaces-abstract-image.jpg')}
        className="size-14 rounded-full"
      />
      <TitleCard title="Daniel Joshua" subtitle="morning," variant="md" />
    </View>
  );
}
