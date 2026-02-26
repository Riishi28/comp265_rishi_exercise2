import { Stack } from 'expo-router';

export default function NotesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#007AFF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'My Notes' }} />
      <Stack.Screen name="details" options={{ title: 'Note Details' }} />
    </Stack>
  );
}