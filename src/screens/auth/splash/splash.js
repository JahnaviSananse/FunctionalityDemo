/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';
Image;

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/splash.jpg')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
