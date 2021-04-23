import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {DataList} from '../../../redux/actions/loadPost.actions';

const Home = props => {
  useEffect(() => {
    props.DataList();
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
      <SafeAreaView>
        {/* {props.dataFetch
          ? props.dataFetch.map((value, index) => {
              console.log('dasdvsfs', value);
              return <Text>{value.title + ' ' + value.body}</Text>;
            })
          : null} */}
        {console.log('dataFetch>>>>>>>>>>>>>>>>>>>>>>>', props.dataFetch)}
        <FlatList data={props.dataFetch} renderItem={renderDataList} />
      </SafeAreaView>
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
});
// const mapDispatchToProps = dispatch => ({
//   data: () => dispatch(DataList()),
// });
export default connect(mapStateToProps, {DataList})(Home);
