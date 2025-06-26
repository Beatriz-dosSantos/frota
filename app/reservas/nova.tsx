import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useRouter } from 'expo-router';
import { criarReserva } from '@/services/reservas';
import { listarFuncionarios } from '@/services/funcionarios';
import { listarVeiculos } from '@/services/veiculos';

const router = useRouter();

<Button title="Voltar" onPress={() => router.back()} />;

export default function NovaReserva() {
  const [funcionarios, setFuncionarios] = useState<any[]>([]);
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [funcionarioId, setFuncionarioId] = useState('');
  const [veiculoId, setVeiculoId] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const router = useRouter();

  useEffect(() => {
    listarFuncionarios().then(setFuncionarios);
    listarVeiculos().then((v) => setVeiculos(v.filter(v => v.ativo)));
  }, []);

  const handleSalvar = async () => {
    if (!funcionarioId || !veiculoId || !data || !hora || !objetivo) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const funcionario = funcionarios.find(f => f.id === funcionarioId);
    const veiculo = veiculos.find(v => v.id === veiculoId);

    await criarReserva({
      funcionarioId,
      nomeFuncionario: funcionario.nomeCompleto,
      data,
      hora,
      objetivo,
      veiculoId,
      modeloCarro: veiculo.modelo,
      placaCarro: veiculo.placa,
    });
    Alert.alert('Sucesso', 'Reserva cadastrada');
    router.replace('/reservas');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Reserva</Text>
      <Text>Funcionário:</Text>
      <Picker selectedValue={funcionarioId} onValueChange={setFuncionarioId}>
        <Picker.Item label="Selecione" value="" />
        {funcionarios.map(f => (
          <Picker.Item key={f.id} label={f.nomeCompleto} value={f.id} />
        ))}
      </Picker>

      <Text>Veículo:</Text>
      <Picker selectedValue={veiculoId} onValueChange={setVeiculoId}>
        <Picker.Item label="Selecione" value="" />
        {veiculos.map(v => (
          <Picker.Item key={v.id} label={`${v.modelo} (${v.placa})`} value={v.id} />
        ))}
      </Picker>

      <TextInput placeholder="Data" value={data} onChangeText={setData} style={styles.input} />
      <TextInput placeholder="Hora" value={hora} onChangeText={setHora} style={styles.input} />
      <TextInput placeholder="Objetivo da Reserva" value={objetivo} onChangeText={setObjetivo} style={styles.input} />
      <Button title="Confirmar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 },
});
