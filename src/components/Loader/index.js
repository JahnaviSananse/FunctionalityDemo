import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../Loader/style';

export const Loader = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
