import React from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../Theme/Colors';
import styles from './styles';

const Remove = ({visible, onClose, onConfirmRemove}) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.vContent}>
          <Text style={styles.txtTitle}>Bạn chắc chắc muốn xoá ghi chú?</Text>

          <View style={styles.vBtn}>
            <TouchableOpacity style={styles.btnHide} onPress={onClose}>
              <Text style={styles.txtBtn}>Đóng</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnHide, {backgroundColor: COLORS.GREED}]}
              onPress={onConfirmRemove}>
              <Text style={styles.txtBtn}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Remove;
