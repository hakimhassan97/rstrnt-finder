import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Styles from '../common/styles';

interface BottomSheetProps {
  title?: string;
  value?: any;
  data: any[];
  onChange: CallableFunction;
}

const DropDownInput = ({title, value, data, onChange}: BottomSheetProps) => {
  return (
    <View style={[Styles.dropdownGroup]}>
      {title && <Text style={Styles.text}>{title}</Text>}
      <Dropdown
        style={[Styles.dropdown]}
        placeholderStyle={Styles.text}
        selectedTextStyle={Styles.text}
        itemTextStyle={Styles.text}
        inputSearchStyle={Styles.text}
        data={data || []}
        search
        value={value}
        labelField="title"
        valueField="alias"
        searchPlaceholder="Search..."
        onChange={item => {
          onChange(item);
        }}
      />
    </View>
  );
};

export default DropDownInput;
