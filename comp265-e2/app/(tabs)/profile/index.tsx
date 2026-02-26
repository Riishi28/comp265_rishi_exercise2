import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const USER = {
  name: ' Rishi',
  username: '@riishi',
  role: 'interactive design and technology student',
  school: 'Saskatchewan polytechnic',
  bio: 'Learning React Native and Building cool things one component at a time.',
  notesCount: 5,
  streak: 7,
  joined: 'February 2025',
};

export default function ProfileScreen() {
  const router = useRouter();

  const goToSettings = () => {
    router.push({
      pathname: '/(tabs)/profile/settings',
      params: { name: USER.name, username: USER.username },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://picsum.photos/seed/profile/200' }} style={styles.avatar} />
        <Text style={styles.name}>{USER.name}</Text>
        <Text style={styles.username}>{USER.username}</Text>
        <Text style={styles.role}>{USER.role}</Text>
        <Text style={styles.school}>{USER.school}</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{USER.notesCount}</Text>
          <Text style={styles.statLabel}>Notes</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{USER.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>A+</Text>
          <Text style={styles.statLabel}>Grade</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>{USER.bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={18} color="#888" />
          <Text style={styles.infoText}>Joined {USER.joined}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="school-outline" size={18} color="#888" />
          <Text style={styles.infoText}>{USER.school}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
        <Ionicons name="settings-outline" size={20} color="#fff" />
        <Text style={styles.settingsButtonText}>Go to Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20, paddingBottom: 40 },
  header: {
    alignItems: 'center', backgroundColor: '#fff', borderRadius: 20, padding: 24, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 14, borderWidth: 3, borderColor: '#5856d6' },
  name: { fontSize: 22, fontWeight: '800', color: '#1a1a1a' },
  username: { fontSize: 14, color: '#5856d6', fontWeight: '600', marginTop: 2 },
  role: { fontSize: 14, color: '#555', marginTop: 4 },
  school: { fontSize: 13, color: '#888', marginTop: 2 },
  statsRow: {
    flexDirection: 'row', backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16,
    justifyContent: 'space-around', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  stat: { alignItems: 'center' },
  statNumber: { fontSize: 22, fontWeight: '800', color: '#5856d6' },
  statLabel: { fontSize: 12, color: '#888', marginTop: 2 },
  statDivider: { width: 1, height: 36, backgroundColor: '#e0e0e0' },
  section: {
    backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 },
  bio: { fontSize: 15, color: '#333', lineHeight: 22 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  infoText: { fontSize: 14, color: '#555' },
  settingsButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, backgroundColor: '#5856d6', borderRadius: 14, paddingVertical: 14,
  },
  settingsButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});