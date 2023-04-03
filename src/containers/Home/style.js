import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  btnAvatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // marginHorizontal: 20,
  },
  txtNote: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnSearch: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 30,
    right: 20,
    borderRadius: 40,
    zIndex: 10,
  },
  imgAdd: {
    width: '100%',
    height: '100%',
  },
  vItem: {
    width: Dimensions.get('screen').width * 0.4,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtContent: {
    fontSize: 16,
    marginTop: 10,
  },
  vFlastlist: {
    marginTop: 15,
  },
  vTime: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  txtTime: {
    fontSize: 13,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});

export default styles;
