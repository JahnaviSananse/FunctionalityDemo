import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {DataList} from '../../../redux/actions/post';
import styles from '../Home/styles';

const Home = props => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    props.DataList();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      props.DataList();
      setRefreshing(false);
    }, 3000);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  }, []);
  const renderDataList = ({item}) => {
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

  return (
    <>
      {props.loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={props.dataFetch}
          renderItem={renderDataList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  dataFetch: state.dataPost.dataRespones,
  loading: state.dataPost.isLoading,
});
// const mapDispatchToProps = dispatch => ({
//   data: () => dispatch(DataList()),
// });
export default connect(mapStateToProps, {DataList})(Home);
