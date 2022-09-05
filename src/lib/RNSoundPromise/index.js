import Sound from 'react-native-sound';

Sound.setCategory('Playback');

class RNSoundPromise {
  constructor({name}) {
    this.name = name;
    this.sound = null;
    this.status = 'initialized';
  }

  load(soundFile) {
    return new Promise((resolve, reject) => {
      const sound = new Sound(soundFile, error => {
        if (error) {
          console.log('load error');
          reject(error);
        }
        sound.setNumberOfLoops(-1);
        this.status = 'loaded';
        this.sound = sound;
        resolve(sound);
      });
    });
  }

  async play() {
    if (this.status === 'initialized') {
      await this.load();
    }

    await new Promise((resolve, reject) => {
      try {
        this.sound.play();
        this.status = 'playing';
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  pause() {
    if (this.status === 'playing') {
      return new Promise((resolve, reject) => {
        this.sound.pause();
        this.status = 'paused';
        resolve();
      });
    }
  }

  stop() {
    if (this.status === 'playing') {
      return new Promise((resolve, reject) => {
        this.sound.stop();
        this.status = 'stopped';
        resolve();
      });
    }
  }
}

export default RNSoundPromise;
