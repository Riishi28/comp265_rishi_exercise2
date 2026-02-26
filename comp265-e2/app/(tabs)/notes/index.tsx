import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

const NOTES = [
  {
    id: '1',
    preview: '1',
    color: '#e3f2fd',
  },
  {
    id: '2',
    preview: '2',
    color: '#f3e5f5',
  },
  {
    id: '3',
    preview: '3',
    color: '#e8f5e9',
  },
  {
    id: '4',
    preview: '4',
    color: '#fff3e0',
  },
  {
    id: '5',
    preview: '5',
    color: '#fce4ec',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const handleNotePress = (note: typeof NOTES[0]) => {
    router.push({
      pathname: '/(tabs)/notes/details',
      params: {
        id: note.id,
        preview: note.preview,
         
      },
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={NOTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => handleNotePress(item)}
            activeOpacity={0.75}
          >
             
            <Text style={styles.notePreview} numberOfLines={2}>{item.preview}</Text>
             
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16, gap: 12 },
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  noteTitle: { fontSize: 17, fontWeight: '700', color: '#1a1a1a', marginBottom: 6 },
  notePreview: { fontSize: 14, color: '#555', lineHeight: 20, marginBottom: 10 },
  noteDate: { fontSize: 12, color: '#888', fontStyle: 'italic' },
}); 