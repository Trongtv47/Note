import {StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  inputTitle: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  inputContent: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    height: 250,
    borderRadius: 10,
    padding: 16,
    top: 0,
    textAlignVertical: 'top',
  },
  btnCreat: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.GREED,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 25,
    shadowColor: COLORS.BLACK,
    shadowRadius: 1,
    shadowOpacity: 0.6,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  vScroll: {
    width: '100%',
    height: 100,
    bottom: 20,
    paddingHorizontal: 20,

    // borderTopWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    shadowColor: COLORS.BLACK,
    shadowRadius: 1,
    shadowOpacity: 0.6,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  vColor: {
    width: 50,
    height: 50,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imgDoneBlack: {
    width: 20,
    height: 20,
  },
});

export default styles;
