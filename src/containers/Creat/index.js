/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DATA_COLOR} from './Data/Index';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addNote} from '../../store/home/slice';
import {useNavigation} from '@react-navigation/native';
import icons from '../../assets';
import {COLORS} from '../../Theme/Colors';
import Toast from 'react-native-root-toast';

const CreatScreen = () => {
  const dispath = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectColor, setSelectColor] = useState('white');

  const onChangeTextTitle = text => {
    setTitle(text);
  };

  const onChangeTextContent = text => {
    setContent(text);
  };

  const onSelectColor = color => {
    setSelectColor(color);
  };

  const onDelTxtContent = () => {
    setContent('');
  };

  const onAddNote = () => {
    if (title || content) {
      dispath(
        addNote({
          id: Date.parse(new Date()),
          title: title,
          content: content,
          color: selectColor,
          isLock: false,
        }),
      );
      navigation.goBack();
    } else {
      Toast.show('Vui lòng nhập nội dung', {duration: 3000});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Cookies</Text>
      <TextInput
        style={styles.inputTitle}
        value={title}
        onChangeText={text => onChangeTextTitle(text)}
        placeholder={'Tiêu đề'}
        maxLength={50}
      />
      <View>
        <TextInput
          style={styles.inputContent}
          value={content}
          onChangeText={text => onChangeTextContent(text)}
          placeholder={'Nội dung'}
          multiline
          textAlignVertical="top"
        />
        <TouchableOpacity
          style={{alignItems: 'flex-end', marginTop: -35, marginRight: 15}}
          onPress={onDelTxtContent}>
          <Image source={icons.remove} style={{width: 25, height: 25}} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}} />

      <TouchableOpacity style={styles.btnCreat} onPress={onAddNote}>
        <Image source={icons.doneWhite} style={styles.imgDoneBlack} />
      </TouchableOpacity>
      <View style={styles.vScroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: 'center',
          }}>
          {DATA_COLOR.map(item => {
            return (
              <TouchableOpacity
                key={item?.id}
                style={[
                  styles.vColor,
                  {
                    backgroundColor: item?.bg,
                    borderWidth: selectColor === item?.bg ? 1 : 0,
                    borderColor: selectColor === item?.bg ? COLORS.GREED : '',
                  },
                ]}
                onPress={onSelectColor.bind(this, item.bg)}>
                {selectColor === item?.bg && (
                  <Image source={icons.doneBlack} style={styles.imgDoneBlack} />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CreatScreen;
