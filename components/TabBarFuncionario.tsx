// Arquivo: components/TabBarFuncionario.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const tabs = [
  { title: 'Reservas', path: '/dashboard-funcionario', icon: 'event' },
];

export default function TabBarFuncionario() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.path}
          style={[
            styles.tabItem,
            pathname === tab.path && styles.activeTab,
          ]}
          onPress={() => router.replace(tab.path as any)}
        >
          <MaterialIcons
            name={tab.icon as any}
            size={24}
            color={pathname === tab.path ? 'blue' : 'gray'}
          />
          <Text style={pathname === tab.path ? styles.activeText : styles.text}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
  text: {
    color: 'gray',
  },
  activeText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
});
