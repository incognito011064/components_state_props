import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// 1️⃣ Define what props this child EXPECTS to receive from the parent
type CounterDisplayProps = {
  count: number;          // PROPS DATA — coming from parent state
  onAdd: () => void;       // PROPS FUNCTION — triggers parent state
  onMinus: () => void;
  onReset: () => void;
};

// 2️⃣ Destructure the props directly in the function signature
export default function CounterDisplay({
  count,
  onAdd,
  onMinus,
  onReset,
}: CounterDisplayProps) {
  return (
    <View style={styles.childBox}>
      <Text style={styles.childLabel}>Ako ang Child Component</Text>

      <Text style={styles.propsTag}>📋 PROPS DATA (Galing sa Parent State)</Text>
      <Text style={styles.countText}>{count}</Text>

      <Text style={styles.propsTag}>📋 PROPS FUNCTION (Triggers Parent State)</Text>

      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={onAdd}>
        <Text style={styles.buttonText}>Add Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={onMinus}>
        <Text style={styles.buttonText}>Minus Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={onReset}>
        <Text style={styles.buttonText}>Reset Count</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  childBox: {
    borderWidth: 2,
    borderColor: '#6C5CE7',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  childLabel: {
    color: '#888',
    marginBottom: 8,
  },
  propsTag: {
    color: '#0984e3',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 8,
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  addButton: { backgroundColor: '#e84393' },
  minusButton: { backgroundColor: '#e74c3c' },
  resetButton: { backgroundColor: '#7f8c8d' },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
