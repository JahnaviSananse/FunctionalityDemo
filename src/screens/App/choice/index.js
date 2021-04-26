import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import styles from '../choice/style';

const Choice = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <Button
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
      </SafeAreaView>
    </>
  );
};

export default Choice;
