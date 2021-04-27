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
import {renderTabs} from './tabs';
import {Loader} from '../../../components/Loader/index';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const loginVerify = (email, pass) => {
    // if (loginValidate(email, pass)) {
    console.log('props.authUser', email);
    props.LoginSuccess({email: email, password: pass, props: props});

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

        <TextField
          title={'Password'}
          change={text => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
        />

        <View style={styles.touchableView}>
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
              loginVerify(email, pass);
            }}>
            <Text style={styles.signinText}> SIGN IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {props.Loading ? (
        <Loader />
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
