import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vContent: {
    width: Dimensions.get('screen').width - 80,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtTitle: {
    fontSize: 16,
    marginTop: 15,
  },

  inputPass: {
    borderRadius: 10,
    width: '75%',
  },

  vPass: {
    flexDirection: 'row',
    height: 48,

    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 12,
    paddingHorizontal: 16,
  },

  vBtn: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 110,
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  btnHide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_1,
    borderRadius: 10,
  },
  txtBtn: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    color: COLORS.WHITE,
    fontSize: 15,
  },
});

export default styles;
