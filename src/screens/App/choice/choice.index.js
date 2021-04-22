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
import {connect} from 'react-redux';
import {DataList} from '../../../redux/actions/loadPost.actions';

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

const styles = StyleSheet.create({});

export default Choice;
