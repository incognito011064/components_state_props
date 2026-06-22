import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CounterDisplay from '../../components/CounterDisplay';

export default function HomeScreen() {
  const [count, setCount] = useState(100);
  const addCount = () => setCount(prev => prev + 1);
  const minusCount = () => setCount(prev => prev - 1);
  const resetCount = () => setCount(100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speed Counter</Text>

      
      <View style={styles.dashboard}>
        <View style={styles.gaugeOuter}>

          <Text style={styles.topLabel}>SPEED</Text>

          <View style={styles.gaugeInner}>
            <Text style={styles.speedText}>{count}</Text>
            <Text style={styles.unit}>KM/H</Text>
          </View>

          <Text style={styles.bottomLabel}>READY</Text>

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
    backgroundColor: '#0a0a0a',
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

dashboard: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 30,
},

gaugeOuter: {
  width: 260,
  height: 260,
  borderRadius: 130,
  borderWidth: 12,
  borderColor: '#ff3b3b',
  backgroundColor: '#111',

  justifyContent: 'center',
  alignItems: 'center',

  shadowColor: '#ff3b3b',
  shadowOpacity: 0.9,
  shadowRadius: 25,
  elevation: 25,
},

gaugeInner: {
  width: 170,
  height: 170,
  borderRadius: 85,
  backgroundColor: '#000',

  justifyContent: 'center',
  alignItems: 'center',

  borderWidth: 2,
  borderColor: '#333',
},

speedText: {
  fontSize: 48,
  fontWeight: 'bold',
  color: '#00ffcc',
},

unit: {
  fontSize: 14,
  color: '#aaa',
  marginTop: 5,
},

topLabel: {
  position: 'absolute',
  top: 20,
  color: '#888',
  fontSize: 12,
  letterSpacing: 2,
},

bottomLabel: {
  position: 'absolute',
  bottom: 20,
  color: '#ff3b3b',
  fontSize: 12,
  letterSpacing: 2,
},
});