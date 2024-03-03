import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../common/styles';
import {Restaurant} from '../entities/restaurant.model';
import Pill from './pill';

interface TileProps {
  restaurant: Restaurant;
  onClickAction: CallableFunction;
}
const Tile = ({restaurant, onClickAction}: TileProps) => {
  const {image_url, name, distance, categories, rating} = restaurant;
  return (
    <TouchableOpacity style={Styles.tile} onPress={() => onClickAction()}>
      <View style={Styles.tileInner}>
        {image_url ? (
          <Image
            style={[{width: 80, height: 80}]}
            source={{
              uri: image_url,
            }}
          />
        ) : (
          <View style={[Styles.centered, {maxWidth: 80, opacity: 0.2}]}>
            <Text>🍳</Text>
          </View>
        )}
        <View style={Styles.tileInnerText}>
          <Text style={Styles.h1}>
            {name} ({rating}/5)
          </Text>
          {distance && <Text style={Styles.h1}>{(distance / 1000).toFixed(2)} km</Text>}
          <View style={[Styles.row, Styles.pillsGroup]}>
            {categories && categories?.length > 0 &&
              categories.map(item => (
                <Pill key={item?.title} text={item?.title} />
              ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
