import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { adicionarFuncionario } from '@/services/funcionarios';

const router = useRouter();

<Button title="Voltar" onPress={() => router.back()} />;

export default function NovoFuncionario() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnh, setCnh] = useState('');
  const [login, setLogin] = useState('');
  const router = useRouter();

  const handleSalvar = async () => {
    if (!nome || !telefone || !cnh || !login) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    await adicionarFuncionario({
      nomeCompleto: nome,
      telefone,
      cnh,
      login,
      autorizado: true,
    });
    Alert.alert('Sucesso', 'Funcionário cadastrado');
    router.replace('/funcionarios');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Funcionário</Text>
      <TextInput placeholder="Nome completo" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={styles.input} />
      <TextInput placeholder="CNH" value={cnh} onChangeText={setCnh} style={styles.input} />
      <TextInput placeholder="Login (email)" value={login} onChangeText={setLogin} style={styles.input} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 },
});
