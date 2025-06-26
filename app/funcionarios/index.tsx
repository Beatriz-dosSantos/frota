import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { listarFuncionarios } from '@/services/funcionarios';
import { Funcionario } from '@/types/funcionario';

const router = useRouter();

<Button title="Voltar" onPress={() => router.back()} />;

export default function FuncionariosIndex() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const router = useRouter();

  useEffect(() => {
    listarFuncionarios().then(setFuncionarios);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Funcionários</Text>
      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nomeCompleto} ({item.login})</Text>
          </View>
        )}
      />
      <Button title="Cadastrar Novo" onPress={() => router.push('/funcionarios/novo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 12 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
});
