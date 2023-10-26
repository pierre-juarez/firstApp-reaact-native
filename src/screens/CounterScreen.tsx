import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ButtonFAB} from '../components/ButtonFAB';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <ButtonFAB
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position="br"
      />
      <ButtonFAB
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position="bl"
      />
      {/* <TouchableOpacity
        style={styles.buttonContainerBR}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
