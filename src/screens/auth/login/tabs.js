import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './style';
export const renderTabs = () => {
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
