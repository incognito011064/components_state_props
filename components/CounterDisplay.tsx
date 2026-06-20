import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRef } from 'react';

type Props = {
  count: number;
  onAdd: () => void;
  onMinus: () => void;
  onReset: () => void;
};

export default function CounterDisplay({
  count,
  onAdd,
  onMinus,
  onReset,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ako ang Child Component</Text>

      <Text style={styles.label}>[PROPS DATA]</Text>
      <Text style={styles.number}>{count}</Text>

      <Text style={styles.label}>[PROPS FUNCTION]</Text>

      <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
        <Text style={styles.btnText}>Add Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.minusBtn} onPress={onMinus}>
        <Text style={styles.btnText}>Minus Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetBtn} onPress={onReset}>
        <Text style={styles.btnText}>Reset Count</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'purple',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  label: {
    color: 'blue',
    marginTop: 10,
  },
  number: {
    fontSize: 40,
    marginVertical: 10,
  },
  addBtn: {
    backgroundColor: 'hotpink',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  minusBtn: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  resetBtn: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});