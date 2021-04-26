import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  name: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
  textFormat: {fontSize: 20},
  backgroundView: {
    backgroundColor: 'yellow',
    margin: 5,
    padding: 5,
  },
  borderView: {
    borderColor: 'black',
    borderBottomWidth: 2,
    // top: 5,
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
