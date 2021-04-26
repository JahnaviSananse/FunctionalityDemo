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
import styles from '../splash/style';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
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

export default Splash;
