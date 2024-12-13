import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>This is my Test App!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: '#115e99',
    paddingVertical: 20, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
  },
  bannerText: {
    fontSize: 24,
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
