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
import {DataList} from '../../../redux/actions/loadPost.actions';

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
          <Text style={{color: 'red'}}> {item.email}</Text>
          <Text> {item.first_name}</Text>
          <Text> {item.last_name}</Text>
          <Image style={styles.img} source={{uri: item.avatar}} />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 2,
            // top: 5,
          }}></View>
      </>
    );
  };

  return (
    <>
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

const styles = StyleSheet.create({
  stretch: {
    width: 15,
    height: 15,
    top: 20,
    left: '3%',
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
    left: '75%',
    bottom: '40%',
    borderRadius: 20,
  },
});

const mapStateToProps = state => ({
  dataFetch: state.dataPost.dataRespones,
  loading: state.dataPost.isLoading,
});
// const mapDispatchToProps = dispatch => ({
//   data: () => dispatch(DataList()),
// });
export default connect(mapStateToProps, {DataList})(Home);
