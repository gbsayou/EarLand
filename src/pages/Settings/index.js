import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
  },
  button: {
    padding: 12,
    margin: 8,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#5e94eb',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

const Feedback = ({navigation}) => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.title}>EarLand</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('feedback')}
        style={styles.button}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
