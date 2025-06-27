// components/TabBarAdmin.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const tabs = [
  { title: 'Funcionários', path: '/dashboard-admin/funcionarios', icon: 'people-outline' },
  { title: 'Veículos', path: '/dashboard-admin/veiculos', icon: 'car-outline' },
  { title: 'Reservas', path: '/dashboard-admin/reservas', icon: 'calendar-outline' },
];

export default function TabBarAdmin() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.path);
        return (
          <TouchableOpacity
            key={tab.path}
            style={[styles.tabItem, isActive && styles.activeTab]}
            onPress={() => router.replace(tab.path as any)}
          >
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={isActive ? '#007AFF' : '#333'}
            />
            <Text style={[styles.tabText, isActive && styles.activeText]}>{tab.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabItem: {
    alignItems: 'center',
    padding: 6,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 12,
    color: '#333',
  },
  activeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
