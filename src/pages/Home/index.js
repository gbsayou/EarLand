import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeContainer from '../../containers/Home';
import playlist from './playlist';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeContainer playlist={playlist} />
    </View>
  );
};

export default Home;
