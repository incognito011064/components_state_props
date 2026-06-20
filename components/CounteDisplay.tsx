import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define what props this component expects
type CounterDisplayProps = {
  count: number;
  onAdd: () => void;
  onMinus: () => void;
  onReset: () => void;
};

export default function CounterDisplay({ count, onAdd, onMinus, onReset }: CounterDisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ako ang Child Component</Text>

      <Text style={styles.smallLabel}>PROPS DATA (Galing sa Parent State)</Text>
      <Text style={styles.countText}>{count}</Text>

      <Text style={styles.smallLabel}>PROPS FUNCTION (Triggers Parent State)</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#E91E63' }]} onPress={onAdd}>
        <Text style={styles.buttonText}>Add Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#F44336' }]} onPress={onMinus}>
        <Text style={styles.buttonText}>Minus Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#9E9E9E' }]} onPress={onReset}>
        <Text style={styles.buttonText}>Reset Count</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#5C6BC0',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  label: { textAlign: 'center', color: '#777', marginBottom: 10 },
  smallLabel: { textAlign: 'center', color: '#2962FF', fontWeight: 'bold', fontSize: 12, marginVertical: 8 },
  countText: { textAlign: 'center', fontSize: 50, fontWeight: 'bold', marginVertical: 8 },
  button: { padding: 16, borderRadius: 10, marginTop: 12 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});