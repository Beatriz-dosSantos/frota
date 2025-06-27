// Arquivo: app/_layout.tsx
import { Slot, usePathname, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TabBarFuncionario from '@/components/TabBarFuncionario';
import TabBarAdmin from '@/components/TabBarAdmin';

export default function Layout() {
  const pathname = usePathname();
  const router = useRouter();

  const isInitialScreen = pathname === '/' || pathname === '/index' || pathname === '/login';

  const renderTabBar = () => {
    if (pathname.startsWith('/dashboard-admin')) {
      return <TabBarAdmin />;
    } else if (pathname.startsWith('/dashboard-funcionario')) {
      return <TabBarFuncionario />;
    }
    return null;
  };

  const renderBackButton = () => {
    if (!isInitialScreen) {
      return (
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>{'< Voltar'}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {renderBackButton()}
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
  backButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#e6e6e6',
  },
  backButtonText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
});
