import React from 'react';
import {View, Image, Text} from 'react-native';
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
        <Text style={styles.signupText}>SIGN-UP</Text>
      </View>
    </View>
  );
};
