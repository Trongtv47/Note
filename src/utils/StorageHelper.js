import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../constants';

export const storeSaveNote = async value => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY.saveNote, value);
  } catch (e) {
    // saving error
    console.log('errorSaveNote===>', e);
  }
};

export const getSaveNote = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY.saveNote);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log('errorgetSaveNote===>', e);
  }
};

export const removeSaveNote = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY.saveNote);
  } catch (e) {
    console.log('errorgetSaveNote===>', e);
  }

  console.log('Done.');
};
