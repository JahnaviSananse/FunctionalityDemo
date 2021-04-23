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
        <View
          style={{
            height: '100%',
            flex: 1,
            // backgroundColor: 'black',
            backgroundColor: 'rgba(237, 239, 242,0.5)',

            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : props.dataGet ? (
        props.dataGet.map((value, index) => {
          return (
            <View style={{backgroundColor: 'yellow', margin: 5, padding: 5}}>
              <Text style={{fontSize: 20}}>
                {'Name : ' + value.name + '\n' + 'JOB : ' + value.job}
              </Text>
              <View
                style={{
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  // top: 5,
                }}></View>
            </View>
          );
        })
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
  job: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
});

const mapStateToProps = state => ({
  dataGet: state.dataPost.PostResponse,
  loading: state.dataPost.isLoading,
});

export default connect(mapStateToProps, {DataPost})(Post);
