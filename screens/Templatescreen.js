import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const templates = [
  {
    id: '1',
    name: 'Modern Developer Portfolio',
    image: 'https://via.placeholder.com/300x150.png?text=Modern+Dev+Template'
  },
  {
    id: '2',
    name: 'Creative Designer Portfolio',
    image: 'https://via.placeholder.com/300x150.png?text=Creative+Design+Template'
  },
  {
    id: '3',
    name: 'Minimal Personal Brand',
    image: 'https://via.placeholder.com/300x150.png?text=Minimal+Template'
  }
];

const TemplateScreen = () => {
  const handleRequest = (templateName) => {
    alert(`You requested: ${templateName}`);
    // In future: Navigate to payment or request form
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a Portfolio Template</Text>
      <FlatList
        data={templates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Button title="Request This Template" onPress={() => handleRequest(item.name)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  }
});

export default TemplateScreen;

