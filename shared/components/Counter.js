import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const centered = {
  justifyContent: 'center',
  alignItems: 'center',
};

const SIZE = 100;
const FONT_SIZE = SIZE / 2;

const styles = StyleSheet.create({
  container: {
    ...centered,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ee7767',
  },
  counter: {
    ...centered,
    width: SIZE,
    height: SIZE,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  numberText: {
    color: '#ee7767',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: FONT_SIZE,
  },
  button: {
    ...centered,
    width: SIZE,
    height: SIZE,
  },
});

const Header = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Pressable onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.counter}>
        <Text style={styles.numberText}>{count}</Text>
      </View>
      <Pressable onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default Header;
