import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const tabs = [
  { label: 'Reservas', path: '/reservas' as const },
  { label: 'Nova Reserva', path: '/reservas/nova' as const },
];

export default function DashboardFuncionario() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu do sistema.');
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Área do Funcionário</Text>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.path}
            style={[
              styles.tabItem,
              pathname === tab.path && styles.activeTab,
            ]}
            onPress={() => router.replace(tab.path)}
          >
            <Text
              style={[
                styles.tabText,
                pathname === tab.path && styles.activeText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  tabBar: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  tabItem: { padding: 10 },
  tabText: { fontSize: 16, color: '#555' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#007bff' },
  activeText: { color: '#007bff', fontWeight: 'bold' },
  logoutButton: { alignItems: 'center', marginTop: 30 },
  logoutText: { color: 'red', fontWeight: 'bold' },
});
