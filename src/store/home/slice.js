import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'home',
  initialState: {
    noteArr: [],
  },
  reducers: {
    addNote(state, action) {
      state?.noteArr?.unshift(action.payload);
    },

    deleteNote(state, action) {
      state.noteArr = state?.noteArr?.filter(
        item => item.id !== action.payload,
      );
    },
    editNote(state, action) {
      state.noteArr = state?.noteArr?.filter(
        item => item.id !== action.payload,
      );
      let newArr = [...state.noteArr];
      const indexItem = state.noteArr.findIndex(
        itemNote => itemNote.id === action.payload.id,
      );
      if (indexItem !== -1) {
        newArr[indexItem] = {
          ...state.noteArr[indexItem],
          title: action.payload.title,
          content: action.payload.content,
        };
      }
      state.noteArr = newArr;
    },
    savePasswordNote(state, action) {
      const indexItem = state.noteArr.findIndex(
        item => item.id === action.payload.id,
      );
      if (indexItem !== -1) {
        if (
          state.noteArr[indexItem].isLock &&
          state.noteArr[indexItem].password === action.payload.password
        ) {
          state.noteArr[indexItem].isLock = false;
        } else {
          state.noteArr[indexItem].password = action.payload.password;
          state.noteArr[indexItem].isLock = true;
        }
      }
    },
  },
  extraReducers: {},
});
export const {addNote, deleteNote, savePasswordNote, editNote} = slice.actions;

export default slice.reducer;

export const homeState = state => state.home;
