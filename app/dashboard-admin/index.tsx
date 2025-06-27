// Arquivo: app/dashboard-admin/index.tsx
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { logout } from '@/services/auth';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/auth/login');
    } catch (error) {
      Alert.alert('Erro ao sair', 'Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel do Administrador</Text>
      <View style={styles.buttons}>
        <Button title="Funcionários" onPress={() => router.replace('/funcionarios')} />
        <Button title="Veículos" onPress={() => router.replace('/veiculos')} />
        <Button title="Reservas" onPress={() => router.replace('/reservas')} />
        <Button title="Sair" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    width: '100%',
    gap: 12,
  },
});
