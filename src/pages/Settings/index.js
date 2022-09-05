import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 8,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  buttonText: {
    fontSize: 20,
  },
});

const Feedback = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('feedback')}
        style={styles.button}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
