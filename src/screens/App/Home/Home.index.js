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
        <View style={{marginLeft: 20}}>
          <Text style={{color: 'red'}}> {item.title}</Text>
          <Text> {item.body}</Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 2,
            top: 5,
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
  },
});

const mapStateToProps = state => ({
  dataFetch: state.dataPost.dataRespones,
});
// const mapDispatchToProps = dispatch => ({
//   data: () => dispatch(DataList()),
// });
export default connect(mapStateToProps, {DataList})(Home);
