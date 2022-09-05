import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  copy: {
    fontSize: 20,
    marginBottom: 12,
  },
  input: {
    height: 120,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
  },
  email: {
    height: 36,
  },
  submit: {
    padding: 12,
    marginTop: 36,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  disabled: {
    opacity: 0.6,
  },
  submitText: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Feedback = ({navigation}) => {
  const [value, onChangeText] = useState();
  const [email, onChangeEmail] = useState();
  const [loading, setLoading] = useState(false);

  const submit = () => {
    console.log(email, value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.copy}>Feedback</Text>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        editable
        autoCorrect={false}
        placeholder="Feedback here"
      />
      <Text style={styles.copy}>Email</Text>
      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        style={[styles.input, styles.email]}
        editable
        autoCorrect={false}
        placeholder="Your email"
      />
      <TouchableOpacity
        style={[styles.submit, !value && styles.disabled]}
        onPress={submit}
        disabled={!value}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View style={styles.centeredView}>
          <View>
            <ActivityIndicator />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Feedback;
