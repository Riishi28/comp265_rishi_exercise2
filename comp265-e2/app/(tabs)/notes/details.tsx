import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const NOTE_CONTENT: Record<string, string> = {
  '1': `1`,
  '2': `2`,
  '3': `3`,
  '4': `4`,
  '5': `5`,
};

export default function DetailsScreen() {
  const { id, title, preview, date } = useLocalSearchParams<{
    id: string; title: string; preview: string; date: string;
  }>();
  const router = useRouter();
  const fullContent = NOTE_CONTENT[id] ?? preview ?? 'No content available.';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.meta}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Note #{id}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      <Text style={styles.body}>{fullContent}</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={18} color="#007AFF" />
        <Text style={styles.backText}>Back to Notes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, paddingBottom: 40 },
  meta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  date: { fontSize: 13, color: '#888', fontStyle: 'italic' },
  badge: { backgroundColor: '#e3f2fd', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { fontSize: 12, color: '#007AFF', fontWeight: '600' },
  title: { fontSize: 26, fontWeight: '800', color: '#1a1a1a', marginBottom: 16, lineHeight: 32 },
  divider: { height: 1, backgroundColor: '#e0e0e0', marginBottom: 20 },
  body: { fontSize: 15, lineHeight: 26, color: '#333' },
  backButton: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 36, alignSelf: 'flex-start' },
  backText: { color: '#007AFF', fontSize: 15, fontWeight: '500' },
});