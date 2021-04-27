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
import {renderDataList} from './list';
import {Loader} from '../../../components/Loader';

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
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  }, []);

  return (
    <>
      {props.loading ? (
        <Loader />
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

export default connect(mapStateToProps, {DataList})(Home);
