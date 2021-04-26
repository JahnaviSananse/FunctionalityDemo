import {StyleSheet} from 'react-native';
import THEME from '../../../constants/colors';
const styles = StyleSheet.create({
  stretch: {
    width: 15,
    height: 15,
    top: 20,
    left: '3%',
  },
  loadingView: {
    height: '100%',
    flex: 1,
    // backgroundColor: 'black',
    backgroundColor: 'rgba(237, 239, 242,0.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderView: {
    borderColor: THEME.BLACK,
    borderBottomWidth: 2,
    // top: 5,
  },
  emailText: {color: THEME.RED},
  img: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
    left: '75%',
    bottom: '40%',
    borderRadius: 20,
  },
});
export default styles;
