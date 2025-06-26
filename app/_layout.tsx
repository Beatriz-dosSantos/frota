import { Slot, useRouter, usePathname } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { title: 'Funcionários', path: '/funcionarios', icon: 'people' },
    { title: 'Veículos', path: '/veiculos', icon: 'directions-car' },
    { title: 'Reservas', path: '/reservas', icon: 'event' },
  ] as const;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Barra de abas no topo */}
        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const isActive = pathname.startsWith(tab.path);
            return (
              <Pressable
                key={tab.path}
                onPress={() => router.replace(tab.path as any)}
                style={[
                  styles.tabItem,
                  isActive && styles.activeTab,
                ]}
              >
                <MaterialIcons
                  name={tab.icon}
                  size={26}
                  color={isActive ? '#007aff' : '#888'}
                  style={isActive && styles.activeIcon}
                />
                <Text style={[styles.tabText, isActive && styles.activeText]}>
                  {tab.title}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Conteúdo da rota */}
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  tabText: {
    fontSize: 12,
    color: '#444',
  },
  activeText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007aff',
  },
  activeIcon: {
    transform: [{ scale: 1.1 }],
  },
});
