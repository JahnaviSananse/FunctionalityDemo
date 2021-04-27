import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../Home/styles';

export const renderDataList = ({item}) => {
  return (
    <>
      <Image
        style={styles.stretch}
        source={require('../../../assets/images/right-arrow.png')}
      />
      <View style={{marginLeft: '10%'}}>
        {console.log('hbchjvdcyjsdvchjsdc', item)}
        <Text style={styles.emailText}> {item.email}</Text>
        <Text> {item.first_name}</Text>
        <Text> {item.last_name}</Text>
        <Image style={styles.img} source={{uri: item.avatar}} />
      </View>
      <View style={styles.borderView}></View>
    </>
  );
};
