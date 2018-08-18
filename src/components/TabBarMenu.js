import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => ( 
  <View style={{ backgroundColor: '#115E54', justifyContent: 'center', elevation: 4, marginBottom: 6 }}>
    <StatusBar hidden />
    <View style={{ backgroundColor: '#114D44', justifyContent: 'center', height: 50 }}>
      <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
    </View>
    <TabBar {...props} style={{ backgroundColor: '#115E54' }} indicatorStyle={{ backgroundColor: 'white' }} />
  </View>
);