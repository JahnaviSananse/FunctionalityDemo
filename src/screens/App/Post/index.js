import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {DataPost} from '../../../redux/actions/loadPost.actions';
import styles from '../Post/styles';

const Post = props => {
  const [item, setItem] = useState('');
  const [job, setJob] = useState('');
  // useEffect(() => {
  //   props.DataPost(item);
  // }, []);

  return (
    <>
      <TextInput
        placeholder="NAME"
        style={styles.name}
        onChangeText={text => {
          setItem(text);
        }}
      />
      <TextInput
        placeholder="JOB"
        style={styles.job}
        onChangeText={text => {
          setJob(text);
        }}
      />
      <Button
        title=" Post Data"
        onPress={() => props.DataPost({name: item, job: job})}
      />

      {props.loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : props.dataGet ? (
        props.dataGet.map((value, index) => {
          return (
            <View style={styles.backgroundView}>
              <Text style={styles.textFormat}>
                {'Name : ' + value.name + '\n' + 'JOB : ' + value.job}
              </Text>
              <View style={styles.borderView}></View>
            </View>
          );
        })
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  dataGet: state.dataPost.PostResponse,
  loading: state.dataPost.isLoading,
});

export default connect(mapStateToProps, {DataPost})(Post);
