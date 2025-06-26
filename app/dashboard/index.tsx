import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { logout } from '@/services/auth';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Gestor de Frota</Text>
      <View style={styles.menu}>
        <Button title="Funcionários" onPress={() => router.push('/funcionarios')} />
        <Button title="Veículos" onPress={() => router.push('/veiculos')} />
        <Button title="Reservas" onPress={() => router.push('/reservas')} />
        <Button title="Sair" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
  menu: { gap: 12, width: '100%' },
});
