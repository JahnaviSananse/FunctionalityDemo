import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Router from '../routes/router';

const Root = props => {
  return (
    <>
      {console.log('kdbhlbjhbjhbjhb,bjhbchjsbchjbeshjcbshdc', props.Loading)}
      {props.Loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Router />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  Loading: state.dataFetch.isLoading,
});
// export default Root;
export default connect(mapStateToProps)(Root);
