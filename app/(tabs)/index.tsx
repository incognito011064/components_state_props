import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CounterDisplay from '../../components/CounterDisplay';

export default function HomeScreen() {
  const [count, setCount] = useState(100);

  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ako ang Parent Screen</Text>

      <View style={styles.stateBox}>
        <Text style={styles.stateText}>STATE LOCKER</Text>
        <Text style={styles.count}>count: {count}</Text>
      </View>

      <CounterDisplay
        count={count}
        onAdd={addCount}
        onMinus={minusCount}
        onReset={resetCount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  stateBox: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  stateText: {
    color: '#fff',
  },
  count: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});