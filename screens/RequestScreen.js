import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RequestScreen = ({ route, navigation }) => {
  const { templateName } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert('Please fill in all required fields.');
      return;
    }

    // Later: send this info to backend or payment page
    Alert.alert('Request submitted!', `Template: ${templateName}\nName: ${name}\nEmail: ${email}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Request: {templateName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Notes (optional)"
        value={note}
        multiline
        numberOfLines={4}
        onChangeText={setNote}
      />
      <Button title="Submit Request" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
    borderRadius: 5
  }
});

export default RequestScreen;
