import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 40, top: -15}}>
        Counter: {counter}
      </Text>
      <Button title="Counter add" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};
