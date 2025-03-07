import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native';

export default function AddButton() {
  return (
    <TouchableHighlight className="size-14 items-center justify-center rounded-full border">
      <Ionicons name="add-outline" size={24} />
    </TouchableHighlight>
  );
}
