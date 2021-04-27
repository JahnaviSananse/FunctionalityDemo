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
import {connect} from 'react-redux';
import {LogoutSuccess} from '../../../redux/actions/auth';
const Choice = props => {
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
        <Button
          title="LOG OUT"
          onPress={() => {
            props.LogoutSuccess();
            props.navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {
  LogoutSuccess,
})(Choice);
