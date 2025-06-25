import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResourceLibrary = () => {
  const navigation = useNavigation();
  const resources = [
    { id: '1', title: 'Study Guide PDF' },
    { id: '2', title: 'Video Lecture Link' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Books')}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resource Library</Text>
      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateContent')}>
        <Text style={styles.buttonText}>Upload Resource</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 16 },
  button: { backgroundColor: '#ff0000', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, alignSelf: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default ResourceLibrary;