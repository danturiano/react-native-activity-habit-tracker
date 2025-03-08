import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import Seperator from './Seperator';

type AddModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function AddModal({ visible = false, onClose }: AddModalProps) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View className="absolute inset-0 bg-[#DDEDEC]">
        <View className="flex-col gap-6 px-8 pt-20">
          <View className="flex-row items-center justify-between">
            <TouchableHighlight
              className="size-14 items-center justify-center rounded-full border"
              onPress={onClose}>
              <Ionicons name="arrow-back-outline" size={24} />
            </TouchableHighlight>
            <Text className="text-2xl">add new habit</Text>
            <TouchableHighlight
              className="size-14 items-center justify-center rounded-full border"
              onPress={onClose}>
              <Ionicons name="add-outline" size={24} />
            </TouchableHighlight>
          </View>
          <Seperator />
        </View>
      </View>
    </Modal>
  );
}
