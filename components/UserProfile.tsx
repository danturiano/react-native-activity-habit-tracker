import { Image, Text, View } from 'react-native';

export default function UserProfile() {
  return (
    <View className="flex-row items-center gap-4">
      <Image
        source={require('../assets/uifaces-abstract-image.jpg')}
        className="size-14 rounded-full"
      />
      <View className="flex flex-col">
        <Text className="text-lg text-gray-500">morning,</Text>
        <Text className="text-xl">Daniel Joshua</Text>
      </View>
    </View>
  );
}
