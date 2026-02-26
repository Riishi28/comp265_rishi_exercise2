import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const { name, username } = useLocalSearchParams<{ name: string; username: string }>();
  const router = useRouter();

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log Out', style: 'destructive', onPress: () => router.back() },
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.userBanner}>
        <Ionicons name="person-circle-outline" size={36} color="#5856d6" />
        <View>
          <Text style={styles.bannerName}>{name ?? 'Unknown User'}</Text>
          <Text style={styles.bannerUsername}>{username ?? '@unknown'}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {[
          { label: 'Push Notifications', icon: 'notifications-outline', value: notifications, setter: setNotifications },
          { label: 'Dark Mode', icon: 'moon-outline', value: darkMode, setter: setDarkMode },
          { label: 'iCloud Sync', icon: 'cloud-outline', value: syncEnabled, setter: setSyncEnabled },
          { label: 'Weekly Email Digest', icon: 'mail-outline', value: emailDigest, setter: setEmailDigest },
        ].map(({ label, icon, value, setter }, i, arr) => (
          <View key={label} style={[styles.settingRow, i === arr.length - 1 && { borderBottomWidth: 0 }]}>
            <View style={styles.settingLeft}>
              <Ionicons name={icon as any} size={20} color="#5856d6" />
              <Text style={styles.settingLabel}>{label}</Text>
            </View>
            <Switch
              value={value}
              onValueChange={setter}
              trackColor={{ false: '#d1d1d1', true: '#5856d6' }}
              thumbColor="#fff"
            />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity
          style={[styles.settingRow, { borderBottomWidth: 0 }]}
          onPress={() => Alert.alert('Version', 'comp265-e2 v1.0.0')}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="information-circle-outline" size={20} color="#5856d6" />
            <Text style={styles.settingLabel}>App Version</Text>
          </View>
          <Text style={styles.settingValue}>1.0.0</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#ff3b30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20, paddingBottom: 40 },
  userBanner: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#ede9fe', borderRadius: 16, padding: 16, marginBottom: 16,
  },
  bannerName: { fontSize: 16, fontWeight: '700', color: '#1a1a1a' },
  bannerUsername: { fontSize: 13, color: '#5856d6', marginTop: 2 },
  section: {
    backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 },
  settingRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e0e0e0',
  },
  settingLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  settingLabel: { fontSize: 15, color: '#1a1a1a' },
  settingValue: { fontSize: 14, color: '#888' },
  logoutButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, backgroundColor: '#fff', borderRadius: 14, paddingVertical: 14,
    borderWidth: 1, borderColor: '#ff3b30',
  },
  logoutText: { color: '#ff3b30', fontSize: 16, fontWeight: '700' },
});