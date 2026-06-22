import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRef } from 'react';

type Props = {
  count: number;
  onAdd: () => void;
  onMinus: () => void;
  onReset: () => void;
};

export default function CounterDisplay(props: Props) {
  const { count, onAdd, onMinus, onReset } = props;

const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAdding = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      onAdd();
    }, 100);
  };

  const startMinus = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      onMinus();
    }, 100);
  };

  const stopAction = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Controller</Text>

      <Text style={styles.number}>{count}</Text>
      <Text style={styles.label}>Hold buttons for continuous action</Text>

      <TouchableOpacity
        style={[styles.btn, styles.addBtn]}
        onPress={onAdd}
        onPressIn={startAdding}
        onPressOut={stopAction}
      >
        <Text style={styles.btnText}>＋ Add</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.minusBtn]}
        onPress={onMinus}
        onPressIn={startMinus}
        onPressOut={stopAction}
      >
        <Text style={styles.btnText}>－ Minus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.resetBtn]}
        onPress={onReset}
      >
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  number: {
    fontSize: 60,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#00ffcc',
  },

  label: {
    color: '#888',
    marginBottom: 15,
  },

  btn: {
    padding: 15,
    borderRadius: 12,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },

  addBtn: {
    backgroundColor: '#00c853',
  },

  minusBtn: {
    backgroundColor: '#d50000',
  },

  resetBtn: {
    backgroundColor: '#2962ff',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});