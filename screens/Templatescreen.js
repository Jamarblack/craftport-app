import { StyleSheet, Text, View } from 'react-native';

const TemplateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Generated Templates</Text>
      <Text>Here you&#39;ll see portfolio templates created by AI.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default TemplateScreen;
