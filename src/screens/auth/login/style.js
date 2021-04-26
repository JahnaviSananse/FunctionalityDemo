import {StyleSheet} from 'react-native';
import THEME from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: THEME.WHITE,
    //justifyContent: 'center',
  },
  textinput: {
    backgroundColor: THEME.WHITE,
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: THEME.BLACK,
    marginLeft: 10,
    borderColor: THEME.BLACK,
    borderWidth: 2,
  },
  loanText: {
    fontSize: 40,
    marginTop: 15,
  },
  headView: {
    backgroundColor: THEME.WHITE,
    height: 90,
    flexDirection: 'row',
  },
  img: {
    marginLeft: '35%',
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
  headText: {
    marginTop: 5,
    marginLeft: 9,
    fontSize: 18,
    marginBottom: 5,
  },
  loginButton: {
    width: '40%',
    marginTop: 10,
    marginLeft: 90,
    left: 40,
    backgroundColor: THEME.GREEN,
    borderRadius: 10,
  },
  signinButton: {
    width: '40%',
    marginTop: 5,
    marginLeft: 90,
    left: 40,
    backgroundColor: THEME.GREEN,
    borderRadius: 10,
  },
  loginGuest: {
    width: '40%',
    marginTop: 10,
    marginLeft: 90,
    left: 40,
    backgroundColor: THEME.WHITE,
    borderColor: THEME.GREEN,
    borderWidth: 2,
    borderRadius: 10,
  },
  loginText: {
    height: 50,
    fontSize: 20,
    color: THEME.BLACK,
    fontWeight: 'bold',
    padding: 10,
    left: 35,
  },
  signinText: {
    height: 50,
    fontSize: 20,
    color: THEME.BLACK,
    fontWeight: 'bold',
    padding: 10,
    left: 35,
  },
  guestText: {
    height: 50,
    fontSize: 20,
    color: THEME.GREEN,
    fontWeight: 'bold',
    padding: 10,
    left: 30,
  },
  forgotPass: {
    color: THEME.RED,
    marginRight: 30,
    marginTop: 10,
  },
  signupView: {
    height: 60,
    marginTop: 35,
    top: '3%',
    flexDirection: 'row',
    backgroundColor: THEME.WHITE,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 25,
    padding: 5,
  },
});

export default styles;
