import { Text, View } from 'react-native';
import Styles from '../common/styles';

interface PillProps {
  text: string
}
const Pill = ({text}:PillProps) => {
  return (
    <View style={Styles.pill}>
      <Text style={Styles.pillText}>{text}</Text>
    </View>
  );
};

export default Pill;
