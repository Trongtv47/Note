/* eslint-disable react-native/no-inline-styles */
import MasonryList from '@react-native-seoul/masonry-list';
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {SCREEN_NAMES} from '../../Navigation/ScreenNames';
import {homeState} from '../../store/home/slice';
import styles from './style';
import icons from '../../assets';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {noteArr} = useSelector(homeState);

  const onAddNote = () => {
    navigation.navigate(SCREEN_NAMES.CREAT_SCREEN);
  };

  const onDetail = item => {
    navigation.navigate(SCREEN_NAMES.DETAIL_SCREEN, {item});
  };

  const renderItem = ({item}) => {
    if (item?.isLock) {
      return (
        <TouchableOpacity
          style={[
            styles.vItem,
            {
              backgroundColor: item?.color,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={onDetail.bind(this, item)}>
          <Image source={icons.lock} style={{width: 40, height: 40}} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.vItem, {backgroundColor: item?.color}]}
          onPress={onDetail.bind(this, item)}>
          <Text style={styles.txtTitle} numberOfLines={2}>
            {item?.title}
          </Text>
          <Text style={styles.txtContent} numberOfLines={4}>
            {item?.content}
          </Text>
          <View style={styles.vTime}>
            <Text style={styles.txtTime} numberOfLines={4}>
              {`${Moment(item?.id).format('DD/MM/YYYY HH:mm')}`}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.txtNote}>Reminders</Text>
      <TouchableOpacity style={styles.btnSearch} onPress={onAddNote}>
        <Image source={icons.add} style={styles.imgAdd} />
      </TouchableOpacity>

      <MasonryList
        data={noteArr || []}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.vFlastlist}
        // refreshing={isLoadingNext}
        // onRefresh={() => refetch({first: ITEM_CNT})}
        // onEndReachedThreshold={0.1}
        // onEndReached={() => loadNext(ITEM_CNT)}
      />
    </View>
  );
};

export default HomeScreen;
