import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setPlayer} from '../../store/player';
import Ripple from 'react-native-material-ripple';
import RNSoundPromise from '../../lib/RNSoundPromise';

const SoundButton = ({
  name,
  sound: soundFile,
  currentMusic = {},
  setMusic,
  iconName,
}) => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const isMePlaying = player.musicName === name && player.status === 'playing';
  const isMePaused = player.musicName === name && player.status === 'paused';
  const isOthersPlaying =
    player.musicName !== name && player.status === 'playing';
  const play = async () => {
    if (isMePlaying) {
      dispatch(setPlayer({status: 'paused'}));
      await currentMusic.pause();
      return;
    }
    if (isMePaused) {
      dispatch(setPlayer({status: 'playing'}));
      await currentMusic.play();
      return;
    }

    if (isOthersPlaying) {
      await currentMusic.stop();
    }
    const Sound = new RNSoundPromise({name});
    await Sound.load(soundFile);
    await Sound.play();
    setMusic(Sound);
    dispatch(setPlayer({status: 'playing', musicName: name}));
  };
  return (
    <View>
      <Ripple
        style={[
          styles.button,
          isMePlaying && styles.playing,
          isMePaused && styles.paused,
        ]}
        rippleColor="#6ca0f5"
        rippleOpacity={0.9}
        rippleDuration={500}
        rippleContainerBorderRadius={30}
        onPress={play}>
        {/* <Ionicons name={iconName} size={24} color="white" /> */}
        <Text style={styles.name}>{name}</Text>
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 80,
    borderRadius: 24,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  playing: {
    backgroundColor: '#1b4b96',
  },
  paused: {
    backgroundColor: '#5e94eb',
  },
  name: {
    color: 'white',
    fontSize: 18,
  },
});

SoundButton.defaultProps = {
  name: 'play now',
  iconName: 'md-musical-notes',
};

export default SoundButton;
