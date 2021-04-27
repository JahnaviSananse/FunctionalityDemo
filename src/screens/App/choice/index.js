import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import styles from '../choice/style';
import Button from '../../../components/Button/index';

const Choice = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Button
          // type="fill"
          title=" Get List"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button
          title="Post Item"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Choice;
