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
                style={[styles.tabItem, isActive && styles.activeTab]}
              >
                <MaterialIcons
                  name={tab.icon}
                  size={24}
                  color={isActive ? '#007aff' : '#444'}
                />
                <Text style={{ color: isActive ? '#007aff' : '#444', fontSize: 12 }}>
                  {tab.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
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
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007aff',
  },
});
