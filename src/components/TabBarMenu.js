import * as React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from '../../node_modules/react-native-router-flux';

export default props => ( 
  <View style={{ backgroundColor: '#115E54', justifyContent: 'center', elevation: 4, marginBottom: 6 }}>
    <StatusBar hidden />

    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
      <View style={{ justifyContent: 'center', height: 50 }}>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
      </View>

      <View style={{ flexDirection: 'row', marginRight: 20 }} >
        <View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>
          <TouchableHighlight
            onPress={() => Actions.adicionarContato()}
            underlayColor='#114D44'
          >
            <Image source={require('../imgs/adicionar_contato.png')} />
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Sair</Text>
        </View>
      </View>
    </View>

    <TabBar {...props} style={{ backgroundColor: '#115E54' }} indicatorStyle={{ backgroundColor: 'white' }} />
  </View>
);