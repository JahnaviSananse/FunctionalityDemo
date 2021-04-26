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
} from 'react-native';
import {connect} from 'react-redux';
import {SignupSuccess} from '../../../redux/actions/auth.actions';
import styles from '../signup/style';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');

  const validateForgot = () => {
    // console.log('hi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    let isValidate = false;
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    let message = '';
    if (fname === '') {
      message = 'please enter your full name!';
    } else if (email === '') {
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

  const signupVerify = () => {
    props.dataStore({fname: fname, email: email, pass: pass});
    props.navigation.navigate('Login');
  };

  const renderSignup = () => {
    return (
      <View>
        <Text style={styles.headText}> Full Name : </Text>

        <TextInput
          onChangeText={text => setFname(text)}
          value={fname}
          placeholder={' Enter Your Name '}
          style={styles.textinput}
        />

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
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.forgotPass}> Already have an Account? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => {
              // if (validateForgot()) {
              signupVerify();
              // }
            }}>
            <Text style={styles.loginText}> SIGN UP </Text>
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
          <Text style={styles.signupText}>SIGN-UP</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {props.Loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          {renderTabs()}

          {renderSignup()}
        </SafeAreaView>
      )}
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  dataStore: data => dispatch(SignupSuccess(data)),
});
const mapStateToProps = state => ({
  Loading: state.dataFetch.isLoading,
  // loading: state.dataPost.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
