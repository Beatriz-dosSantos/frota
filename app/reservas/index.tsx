import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { listarReservas } from '@/services/reservas';
import { Reserva } from '@/types/reserva';
const router = useRouter();

<Button title="Voltar" onPress={() => router.back()} />;

export default function ReservasIndex() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const router = useRouter();

  useEffect(() => {
    listarReservas().then(setReservas);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Reservas</Text>
      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nomeFuncionario} - {item.modeloCarro}</Text>
            <Text>{item.data} às {item.hora}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
      <Button title="Nova Reserva" onPress={() => router.push('/reservas/nova')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 12 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
});
