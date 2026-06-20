import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CounterDisplay from '../../components/CounterDisplay';

export default function HomeScreen() {
  const [count, setCount] = useState(100);

  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
  const resetCount = () => setCount(100);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ako ang Parent Screen</Text>
      <View style={styles.speedometer}>
      <View style={styles.innerCircle}>
      <Text style={styles.speedText}>{count}</Text>
      <Text style={styles.kmh}>State Locker</Text>
     </View>
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
speedometer: {
  width: 220,
  height: 220,
  borderRadius: 110,
  borderWidth: 15,
  borderColor: '#ff3b3b', // outer ring
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 30,
  backgroundColor: '#1a1a1a',
  shadowColor: '#ff3b3b',
  shadowOpacity: 0.8,
  shadowRadius: 20,
},

innerCircle: {
  width: 160,
  height: 160,
  borderRadius: 80,
  backgroundColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
},

speedText: {
  color: '#00ffcc',
  fontSize: 40,
  fontWeight: 'bold',
},

kmh: {
  color: '#aaa',
  fontSize: 14,
  marginTop: 5,
},
});