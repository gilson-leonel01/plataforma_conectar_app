import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GroupStudyRoom = () => {
  const navigation = useNavigation();
  const members = [
    { id: '1', name: 'Jane Smith' },
    { id: '2', name: 'Mike Johnson' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Group Study Room</Text>
      <FlatList
        data={members}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>Join Room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 16 },
  button: { backgroundColor: '#ff0000', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, alignSelf: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default GroupStudyRoom;