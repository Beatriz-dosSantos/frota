import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { adicionarVeiculo } from '@/services/veiculos';

const router = useRouter();

<Button title="Voltar" onPress={() => router.back()} />;

export default function NovoVeiculo() {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const router = useRouter();

  const handleSalvar = async () => {
    if (!placa || !modelo) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    await adicionarVeiculo({
      placa,
      modelo,
      ativo: true,
    });
    Alert.alert('Sucesso', 'Veículo cadastrado');
    router.replace('/veiculos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Veículo</Text>
      <TextInput placeholder="Placa" value={placa} onChangeText={setPlaca} style={styles.input} />
      <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} style={styles.input} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 },
});
