import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {DataPost} from '../../../redux/actions/post';
import styles from '../Post/styles';
import TextField from '../../../components/TextField/index';
import Button from '../../../components/Button';

const Post = props => {
  const [item, setItem] = useState('');
  const [job, setJob] = useState('');
  // useEffect(() => {
  //   props.DataPost(item);
  // }, []);

  return (
    <>
      {/* <TextInput
        placeholder="NAME"
        style={styles.name}
        onChangeText={text => {
          setItem(text);
        }}
      /> */}

      <TextField
        value={item}
        change={text => setItem(text)}
        placeholder={' NAME'}
      />

      {/* <TextInput
        placeholder="JOB"
        style={styles.job}
        onChangeText={text => {
          setJob(text);
        }}
      /> */}
      <TextField
        value={job}
        change={text => setJob(text)}
        placeholder={' JOB'}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'yellow',
          height: '20%',
        }}>
        <Button
          title=" Post Data"
          onPress={() => {
            props.DataPost({name: item, job: job});
            setItem(' ');
            setJob(' ');
            return;
          }}
        />
      </View>

      {props.loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : props.dataGet ? (
        props.dataGet.map((value, index) => {
          return (
            <View style={styles.backgroundView}>
              <Text key={index} style={styles.textFormat}>
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
