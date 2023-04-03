/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import icons from '../../../../assets';
import {COLORS} from '../../../../Theme/Colors';

const Lock = ({
  visible,
  onClse,
  onChangeTextPass,
  password,
  onConfirmLock,
  isLock,
}) => {
  const [isShowPass, setIsShowPass] = useState(true);

  const onShowPass = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.vContent}>
          <Text style={styles.txtTitle}>
            {isLock ? 'Mở khoá ghi chú' : 'Đặt mật khẩu ghi chú'}
          </Text>
          <View style={styles.vPass}>
            <TextInput
              style={styles.inputPass}
              value={password}
              onChangeText={text => onChangeTextPass(text)}
              placeholder={'Mật khẩu'}
              maxLength={50}
              secureTextEntry={isShowPass}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginLeft: 8,
              }}
              onPress={onShowPass}>
              <Image
                source={isShowPass ? icons.eyeHide : icons.eyeShow}
                style={{width: 25, height: 25, paddingr: 20}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.vBtn}>
            <TouchableOpacity style={styles.btnHide} onPress={onClse}>
              <Text style={styles.txtBtn}>Đóng</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnHide, {backgroundColor: COLORS.GREED}]}
              onPress={onConfirmLock}>
              <Text style={styles.txtBtn}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Lock;
