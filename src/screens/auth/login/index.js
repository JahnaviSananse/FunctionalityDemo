import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {LoginSuccess} from '../../../redux/actions/auth.actions';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const validateForgot = () => {
    let isValidate = false;
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    let message = '';
    if (email === '') {
      message = 'please enter your email address!';
    } else if (!mailFormat.test(email)) {
      isValidate = false;
      message = 'Please enter valid email address.';
    } else if (pass === '') {
      message = 'please enter your password!';
    } else if (pass.length < 5) {
      isValidate = false;
      message = 'Please add at least 5 charachter.';
    } else {
      return true;
    }

    if (isValidate === false) {
      alert(message);
    }
  };

  const loginVerify = () => {
    // if (validateForgot()) {
    console.log('props.authUser', props.authUser);
    if (props.authUser[0].email === email && props.authUser[0].pass === pass) {
      props.LoginSuccess();
      setTimeout(() => {
        props.navigation.navigate('Choice');
      }, 2000);
    } else {
      alert('Invalid Details');
    }
    // }
  };

  const renderSignin = () => {
    return (
      <View>
        <Text style={styles.headText}> Email Address : </Text>

        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
          style={styles.textinput}
        />

        <Text style={styles.headText}> Password : </Text>

        <TextInput
          onChangeText={text => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
          style={styles.textinput}
        />
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert', 'Forget Password ?');
            }}>
            <Text style={styles.forgotPass}> Forgot Password? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signinButton}>
          <TouchableOpacity
            onPress={() => {
              loginVerify();
            }}>
            <Text style={styles.signinText}> SIGN IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View>
        <View style={styles.headView}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/virgo.png')}
          />
        </View>
        <View style={styles.signupView}>
          <Text style={styles.signupText}>SIGN IN</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {props.Loading ? (
        <View
          style={{
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
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView
          style={{
            height: '100%',
            backgroundColor: 'white',
            //justifyContent: 'center',
          }}>
          {renderTabs()}
          {renderSignin()}
        </SafeAreaView>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  authUser: state.dataFetch.authUser,
  Loading: state.dataFetch.isLoading,
});
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  loanText: {
    fontSize: 40,
    marginTop: 15,
  },
  headView: {
    backgroundColor: 'white',
    height: 90,
    flexDirection: 'row',
  },
  img: {
    marginLeft: '35%',
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
    backgroundColor: 'green',
    borderRadius: 10,
  },
  signinButton: {
    width: '40%',
    marginTop: 5,
    marginLeft: 90,
    left: 40,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  loginGuest: {
    width: '40%',
    marginTop: 10,
    marginLeft: 90,
    left: 40,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
  },
  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 35,
  },
  signinText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    left: 35,
  },
  guestText: {
    height: 50,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    padding: 10,
    left: 30,
  },
  forgotPass: {
    color: 'red',
    marginRight: 30,
    marginTop: 10,
  },
  signupView: {
    height: 60,
    marginTop: 35,
    top: '3%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 25,
    padding: 5,
  },
});

export default connect(mapStateToProps, {LoginSuccess})(Login);
