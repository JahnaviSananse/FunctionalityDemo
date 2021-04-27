import {StyleSheet} from 'react-native';
import THEME from '../../../constants/colors';
const styles = StyleSheet.create({
  name: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
  textFormat: {fontSize: 20},
  backgroundView: {
    backgroundColor: THEME.YELLOW,
    margin: 5,
    padding: 5,
  },
  borderView: {
    borderColor: THEME.BLACK,
    borderBottomWidth: 2,
    // top: 5,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    height: '20%',
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
  job: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
});

export default styles;
