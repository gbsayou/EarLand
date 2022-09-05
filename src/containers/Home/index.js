import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import PlayList from '../../components/PlayList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
  },
  lists: {
    paddingTop: 12,
  },
});

const Home = ({playlist}) => {
  const [currentMusic, setMusic] = useState();
  const renderPlayList = ({item}) => (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <PlayList
        playlist={item.list}
        currentMusic={currentMusic}
        setMusic={setMusic}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        style={styles.lists}
        data={playlist}
        renderItem={renderPlayList}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default Home;
