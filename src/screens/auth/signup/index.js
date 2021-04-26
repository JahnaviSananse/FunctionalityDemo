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
import {SignupSuccess} from '../../../redux/actions/auth';
import styles from '../signup/style';
import TextField from '../../../components/TextField';
import {signupValidate} from '../../../utility/util';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');

  const signupVerify = () => {
    props.dataStore({fname: fname, email: email, pass: pass});
    props.navigation.navigate('Login');
  };

  const renderSignup = () => {
    return (
      <View>
        {/* <Text style={styles.headText}> Full Name : </Text>
        <TextInput
          onChangeText={text => setFname(text)}
          value={fname}
          placeholder={' Enter Your Name '}
          style={styles.textinput}
        />
         */}
        <TextField
          title={'Full Name : '}
          change={text => setFname(text)}
          value={fname}
          placeholder={'Enter Your Name'}
        />

        {/* <Text style={styles.headText}> Email Address : </Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
          style={styles.textinput}
        /> */}

        <TextField
          title={' Email Address :'}
          change={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
        />

        {/* <Text style={styles.headText}> Password : </Text>
        <TextInput
          onChangeText={text => setPass(text)}
          value={pass}
          placeholder={' Enter Here '}
          style={styles.textinput}
        /> */}

        <TextField
          title={'Password :'}
          change={text => setPass(text)}
          value={pass}
          placeholder={'  Enter Here '}
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
              // if (signupValidate(email, pass, fname)) {
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
