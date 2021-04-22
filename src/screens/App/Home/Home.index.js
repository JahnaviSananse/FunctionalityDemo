import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {DataList} from '../../../redux/actions/loadPost.actions';

const Home = props => {
  useEffect(() => {
    props.DataList();
  }, []);

  const renderDataList = ({item}) => {
    return (
      <>
        <View style={{margin: 10}}>
          <Text style={{color: 'red'}}> {item.title}</Text>
          <Text> {item.body}</Text>
          <View style={{borderColor: 'black', borderBottomWidth: 2}}></View>
        </View>
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

const mapStateToProps = state => ({
  dataFetch: state.dataPost.dataRespones,
});
// const mapDispatchToProps = dispatch => ({
//   data: () => dispatch(DataList()),
// });
export default connect(mapStateToProps, {DataList})(Home);
