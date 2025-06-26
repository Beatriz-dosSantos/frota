import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { listarVeiculos } from '@/services/veiculos';
import { Veiculo } from '@/types/veiculo';

export default function VeiculosIndex() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const router = useRouter();

  useEffect(() => {
    listarVeiculos().then(setVeiculos);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Veículos Cadastrados</Text>
      <FlatList
        data={veiculos.filter(v => v.ativo)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.modelo} - {item.placa}</Text>
          </View>
        )}
      />
      <Button title="Cadastrar Novo" onPress={() => router.push('/veiculos/novo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 12 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
});
