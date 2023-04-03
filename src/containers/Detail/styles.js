import {StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'tomato',
  },
  VTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 10,
  },
  vContent: {
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },

  inputTitle: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  imgRemove: {
    width: 25,
    height: 25,
  },
  btnDone: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.GRADIENT_1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imgDoneBlack: {
    width: 20,
    height: 20,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtContent: {
    fontSize: 16,
    marginTop: 10,
  },
  vTime: {
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'flex-end',
  },
  txtTime: {
    fontSize: 13,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});

export default styles;
