import React from 'react';
import { View, Button, TextInput } from 'react-native';

export default props => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        placeholder='Email'
        style={{ fontSize: 20, height: 45 }}
        onChange={() => false }
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title='Adicionar' color='#115E54' onPress={() => false} />
    </View>
  </View>
);
