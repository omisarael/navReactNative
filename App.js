import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Homevdfd',
    headerStyle: {
      backgroundColor: '#ffeecc'
    },
    headerTintColor: 'green'
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="a detalle" onPress={() => navigate('Detalle', {paramEnviado: 'param desde home'})}></Button>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Detalle')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Detalle')}
        />
        <Button
        title="go to last screen"
        onPress={() => this.props.navigation.popToTop()}
      />
      </View>
    );
  }
}

const DetalleScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalle Screen</Text>
      <Button title="a home" onPress={() => navigation.goBack()}></Button>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="go to last screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="SetParams al titulo de navegacion"
        onPress={() => navigation.setParams({paramEnviado: 'cambiado en detalle con setParamas'})}
      />
    </View>
  )
}

DetalleScreen.navigationOptions = ({navigation}) => {
  return{
    title: navigation.getParam('paramEnviado',  'parametro defaul Detalle'),
    headerStyle: {
      backgroundColor: '#ffeecc'
    },
    headerTintColor: 'green',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detalle: {
    screen: DetalleScreen
  }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);