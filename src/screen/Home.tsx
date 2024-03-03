import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import provider from '../provider/provider';
import Tile from '../components/tile';
import Styles from '../common/styles';
import DropDownInput from '../components/dropdown-input';
import {sortByList} from '../common/constants';
import {Restaurant} from '../entities/restaurant.model';

interface HomeProps {}

const HomeScreen = ({}: HomeProps) => {
  const [coordinate, setCoordinate] = useState<any>();
  const [address, setAddress] = useState<any>();
  const [fullList, setFullList] = useState([]); //
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSortBy, setActiveSortBy] = useState('');
  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (info: {coords: any}) => {
        setCoordinate(info?.coords);
      },
      (e: any) => Alert.alert('Fail to obtain location'),
      undefined,
    );
  }, []);

  useEffect(() => {
    if (coordinate) {
      fetchMainList();
    }
    if (coordinate && !address) {
      fetchAddress();
    }
  }, [coordinate, activeCategory, activeSortBy]);

  const fetchMainList = useCallback(async () => {
    try {
      const req = {
        ...coordinate,
        category: activeCategory,
        sortby: activeSortBy,
      };
      const list = await provider.getMainList(req);
      const businesses = list?.businesses || [];
      setFullList(list?.businesses);

      if (businesses?.length > 0 && categories?.length === 0) {
        let categoryList: any[] = [];
        businesses.forEach((item: {categories: any}) => {
          categoryList.push(...item.categories);
        });
        setCategories(categoryList);
      }
    } catch (e) {
      console.log('Error fetching list :: ', e);
      Alert.alert('Error fetching list');
    }
  }, [coordinate, activeCategory, activeSortBy]);

  const fetchAddress = useCallback(async () => {
    const addressInfo = await provider.getAddress(coordinate);
    if (addressInfo?.items?.length > 0) {
      setAddress(addressInfo?.items[0]);
    }
  }, [coordinate]);

  const triggerModal = (restaurant: any) => {
    setActiveRestaurant(restaurant);
    setModalVisible(modalVisible => !modalVisible);
  };

  const onChangeCategory = (category: any) => {
    setActiveCategory(category?.alias);
  };

  const onChangeSortBy = (sortBy: any) => {
    setActiveSortBy(sortBy?.alias);
  };

  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.header}>
          <Text style={Styles.addressText}>⚲ {address?.title || `${coordinate?.latitude},${coordinate?.longitude}`}</Text>
          <View style={Styles.dropdownFlex}>
            {categories?.length > 0 && (
              <DropDownInput
                title="Category"
                value={activeCategory}
                data={[{title: 'All', alias: ''}, ...categories] || []}
                onChange={onChangeCategory}
              />
            )}
            {sortByList?.length > 0 && (
              <DropDownInput
                title="Sort By"
                value={activeSortBy}
                data={sortByList || []}
                onChange={onChangeSortBy}
              />
            )}
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={fullList}
            style={Styles.flatlist}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 35}}
            renderItem={item => (
              <View key={item?.item}>
                <Tile
                  restaurant={item?.item}
                  onClickAction={() => triggerModal(item?.item)}
                />
              </View>
            )}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles?.centeredView}>
          <View style={Styles?.modalView}>
            {activeRestaurant?.image_url ? (
              <Image
                style={[{width: '100%', height: 200}]}
                source={{
                  uri: activeRestaurant?.image_url,
                }}
              />
            ) : (
              <View style={[Styles.centered, {maxWidth: 80, opacity: 0.2}]}>
                <Text>🍳</Text>
              </View>
            )}
            {activeRestaurant?.name && (
              <Text style={Styles?.modalText}>
                {activeRestaurant?.name} ({activeRestaurant?.rating}/5)
              </Text>
            )}

            {activeRestaurant?.display_phone && (
              <Text style={Styles?.modalText}>
                {activeRestaurant?.display_phone}
              </Text>
            )}
            {activeRestaurant?.distance && (
              <Text style={Styles?.modalText}>
                {(activeRestaurant?.distance / 1000).toFixed(2)} km
              </Text>
            )}

            {activeRestaurant?.location && (
              <Text style={Styles?.modalText}>
                {activeRestaurant?.location?.display_address?.[0]}
              </Text>
            )}
            {activeRestaurant?.phone && (
              <Text style={Styles?.modalText}>{activeRestaurant?.phone}</Text>
            )}
            <TouchableOpacity
              style={[Styles?.button, Styles?.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={Styles?.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;
