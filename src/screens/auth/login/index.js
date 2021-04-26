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
import {LoginSuccess} from '../../../redux/actions/auth';
import styles from '../login/style';
import TextField from '../../../components/TextField/index';

import {loginValidate} from '../../../utility/util';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const loginVerify = () => {
    // if (loginValidate(email, pass)) {
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
        {/* <Text style={styles.headText}> Email Address : </Text> */}
        {/* <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
          style={styles.textinput}
        /> */}

        <TextField
          title={'Email Address'}
          change={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
        />
        {/* 
        <Text style={styles.headText}> Password : </Text>
        <TextInput
          onChangeText={text => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
          style={styles.textinput}
        /> */}

        <TextField
          title={'Password'}
          change={text => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
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
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
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

export default connect(mapStateToProps, {LoginSuccess})(Login);
