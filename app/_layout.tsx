// Arquivo: app/_layout.tsx
import { Slot, usePathname } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import TabBarFuncionario from '@/components/TabBarFuncionario';
import TabBarAdmin from '@/components/TabBarAdmin';

export default function Layout() {
  const pathname = usePathname();

  const renderTabBar = () => {
    if (pathname.startsWith('/dashboard-admin')) {
      return <TabBarAdmin />;
    } else if (pathname.startsWith('/dashboard-funcionario')) {
      return <TabBarFuncionario />;
    }
    return null; // não renderiza nenhuma aba na tela de login
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Slot />
        {renderTabBar()}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
