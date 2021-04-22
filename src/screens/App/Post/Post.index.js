import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {DataPost} from '../../../redux/actions/loadPost.actions';
const Post = props => {
  const [item, setItem] = useState('');
  // useEffect(() => {
  //   props.DataPost(item);
  // }, []);

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setItem(text);
          }}
        />
        <Button
          title=" Post Data"
          onPress={() => props.DataPost({name: item})}
        />
        <Text>{props.dataGet}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
});

const mapStateToProps = state => ({
  dataGet: state.dataPost.PostResponse,
});

export default connect(mapStateToProps, {DataPost})(Post);
