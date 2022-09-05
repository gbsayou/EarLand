import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SoundButton from '../SoundButton';

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const PlayList = ({playlist, currentMusic, setMusic}) => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {playlist.map(sound => (
        <SoundButton {...{key: sound.name, ...sound, currentMusic, setMusic}} />
      ))}
    </ScrollView>
  );
};

PlayList.defaultProps = {
  sounds: [],
};

export default PlayList;
