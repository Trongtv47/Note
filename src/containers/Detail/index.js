/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import icons from '../../assets';
import Moment from 'moment';
import {COLORS} from '../../Theme/Colors';
import Lock from './Component/Lock';
import Remove from './Component/Remove';
import {useDispatch, useSelector} from 'react-redux';
import {
  addNote,
  deleteNote,
  editNote,
  homeState,
  savePasswordNote,
} from '../../store/home/slice';
import Toast from 'react-native-root-toast';

const DetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  console.log('route=========>', route);

  const [isEdit, setIsEdit] = useState(false);
  const [isShowContent, setIsShowContent] = useState(false);
  const [isShowRemove, setIsShowRemove] = useState(false);
  const {noteArr} = useSelector(homeState);

  const item = noteArr.find(
    itemNote => itemNote.id === route?.params?.item?.id,
  ) || {
    color: route?.params?.item?.color,
    content: route?.params?.item?.content,
    id: route?.params?.item?.id,
    isLock: route?.params?.item?.isLock,
    password: route?.params?.item?.password,
    title: route?.params?.item?.title,
  };
  const [password, setPassword] = useState(item?.password ?? '');
  const [editItemTitle, setEditItemTitle] = useState(' xin chao');
  const [editItemContent, setEditItemContent] = useState('');

  const onChangeTextTitle = text => {
    setEditItemTitle(text);
  };

  const onChangeTextContent = text => {
    setEditItemContent(text);
  };
  const onUnLock = () => {
    if (item?.isLock) {
      setPassword('');
    } else {
      setPassword(item?.password);
    }
    setIsShowContent(!isShowContent);
  };

  const onChangeTextPass = text => {
    setPassword(text);
  };

  const onConfirmLock = () => {
    dispatch(savePasswordNote({id: item?.id, password: password}));
    setIsShowContent(false);
  };

  const onRemove = () => {
    setIsShowRemove(!isShowRemove);
  };
  const onEdit = () => {
    setIsEdit(!isEdit);
    setEditItemTitle(item?.title);
    setEditItemContent(item?.content);
  };

  const onClose = () => {
    setIsShowContent(false);
  };

  const onCloseRemove = () => {
    setIsShowRemove(false);
  };

  const onConfirmRemove = idNote => {
    setIsShowRemove(false);
    dispatch(deleteNote(idNote));
    Toast.show('Xoá thành công');
    navigation.goBack();
  };

  const editItem = (content, title, id) => {
    dispatch(
      editNote({
        content,
        title,
        id,
      }),
    );
    setIsEdit(false);
    Toast.show('Sửa thành công');
  };

  const onDelTxtContent = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.VTop}>
        <TouchableOpacity onPress={onEdit}>
          <Image source={icons.edit} style={styles.imgRemove} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onUnLock}>
          <Image
            source={!item?.isLock ? icons.unLock : icons.lock}
            style={[styles.imgRemove, {marginHorizontal: 20}]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onRemove}>
          <Image source={icons.remove} style={styles.imgRemove} />
        </TouchableOpacity>
      </View>
      {!isEdit ? (
        <View style={[styles.vContent, {backgroundColor: item?.color}]}>
          <Text
            style={[
              styles.txtTitle,
              {color: item?.isLock ? item?.color : COLORS.BLACK},
            ]}>
            xin chao
            {/* {item?.title} */}
          </Text>
          <Text
            style={[
              styles.txtContent,
              {color: item?.isLock ? item?.color : COLORS.BLACK},
            ]}>
            {item?.content}
          </Text>

          <View style={styles.vTime}>
            <Text
              style={[
                styles.txtTime,
                {color: item?.isLock ? item?.color : COLORS.BLACK},
              ]}
              numberOfLines={4}>
              {`${Moment(item?.id).format('DD/MM/YYYY HH:mm')}`}
            </Text>
          </View>
        </View>
      ) : (
        <>
          <TextInput
            style={styles.inputTitle}
            value={editItemTitle}
            onChangeText={text => onChangeTextTitle(text)}
            editable={isEdit}
            secureTextEntry={isShowContent}
            maxLength={50}
          />

          <View>
            <TextInput
              style={[styles.inputTitle, {height: 350}]}
              value={editItemContent}
              onChangeText={text => onChangeTextContent(text)}
              editable={isEdit}
              secureTextEntry={isShowContent}
              multiline
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={{alignItems: 'flex-end', marginTop: -35, marginRight: 15}}
              onPress={onDelTxtContent}>
              <Image source={icons.remove} style={{width: 25, height: 25}} />
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={{flex: 1}} />
      {isEdit ? (
        <TouchableOpacity
          style={styles.btnDone}
          onPress={editItem.bind(
            this,
            editItemContent,
            editItemTitle,
            item.id,
          )}>
          <Image
            source={icons.doneWhite}
            style={[styles.imgRemove, {marginHorizontal: 20}]}
          />
        </TouchableOpacity>
      ) : null}

      <Lock
        isLock={item?.isLock}
        visible={isShowContent}
        onClse={onClose}
        onChangeTextPass={onChangeTextPass}
        password={password}
        onConfirmLock={onConfirmLock}
      />
      <Remove
        visible={isShowRemove}
        onConfirmRemove={onConfirmRemove.bind(this, item?.id)}
        onClose={onCloseRemove}
      />
    </View>
  );
};

export default DetailScreen;
