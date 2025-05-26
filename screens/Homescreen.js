import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AI Portfolio Generator</Text>
      <Text style={styles.subtitle}>Build stunning portfolio websites in minutes!</Text>
      <Button
        title="Explore Templates"
        onPress={() => navigation.navigate('Template')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20
  }
});

export default HomeScreen;
